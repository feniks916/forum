import { connect } from 'react-redux';
import { createArticleThunk, setCreatedAC, setErrorAC, getCurrentArticleAC, setRecievedAC } from '../../Redux/Article';
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Input, Result, Alert, Spin, } from 'antd';
import { useHistory } from "react-router-dom";
import cls from './add.module.scss';
import * as Yup from 'yup';
import instance, { updateArticle } from '../../API/API';

import 'react-tagsinput/react-tagsinput.css'
import EditableTagGroup from '../../helpers/tagsCreator';

const EditArticle = (props) => {
    const {
        createArticleThunk,
        isCreated,
        setCreatedAC,
        setErrorAC,
        currentArticle,
        isReceived,
        getCurrentArticleAC,
        setRecievedAC } = props;
    const { body, description, title, tagList } = currentArticle;

    let history = useHistory();
    const sessionSlug = localStorage.getItem('slug');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await instance.get(`/api/articles/${sessionSlug}`)
                getCurrentArticleAC(result.data.article)
                setRecievedAC(true)
            } catch (error) {
                if (error) {
                    console.log(error)
                }
            }
        }
        if (sessionSlug !== null && isReceived === false) {
            fetchData();
        }
    }, [body, isReceived])

    const resetErrors = () => {
        setErrorAC('')
    }

    const redirectToArticles = () => {
        history.push("/forum/articles");
        setCreatedAC(false);
        setErrorAC('')
        getCurrentArticleAC({})
        setRecievedAC(false)
    }
    return (
        <div className={cls.wrapper}>
            {isCreated &&
                <Result
                    status="success"
                    title={currentArticle.hasOwnProperty('body')
                        ? "Article updated successfully"
                        : "Article created successfully"}
                    extra={[
                        <button
                            onClick={redirectToArticles}
                            type="primary" key="console">
                            Go to Atricles page </button>
                    ]}
                />
            }
            {!isReceived && <Spin size="large" />}

            {!isCreated && isReceived &&
                <Formik

                    initialValues={{
                        title: title || "", description: description || "", body: body || "", tagList: tagList || [],
                    }}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        if (currentArticle.hasOwnProperty('body')) {
                            const newValues = { ...values };
                            if (values.tagList.length === 0) {
                                newValues.tagList = [''];
                            }
                            updateArticle({
                                article: {
                                    title: newValues.title,
                                    description: newValues.description,
                                    body: newValues.body,
                                    tagList: newValues.tagList
                                }
                            })
                            setCreatedAC(true)
                        }
                        else {
                            createArticleThunk({
                                article: {
                                    title: values.title,
                                    description: values.description,
                                    body: values.body,
                                    tagList: values.tagList
                                }
                            })
                            setCreatedAC(true)
                        }
                    }}
                    validationSchema={Yup.object().shape({
                        title: Yup.string()
                            .required('field shouldnt be empty'),
                        description: Yup.string()
                            .required('field shouldnt be empty'),
                        body: Yup.string()
                            .required('field shouldnt be empty'),
                    })}
                >
                    {props => {
                        const {
                            values,
                            dirty,
                            errors,
                            touched,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset,
                            setFieldValue
                        } = props;
                        return (
                            <div>
                                <button
                                    onClick={redirectToArticles}
                                    className={cls.articles}> <p> Atricles</p></button>

                                <form onSubmit={handleSubmit} className={cls.form}>
                                    <label htmlFor="email" style={{ display: "block" }}>
                                        Title
                                  </label>
                                    <Input
                                        id="title"
                                        placeholder="Enter title of article"
                                        type="text"
                                        value={values.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={cls.input}
                                    />
                                    {errors.title && touched.title && (
                                        <div className={cls.errors}><Alert message={errors.title} type="error" showIcon /></div>
                                    )}
                                    <label htmlFor="email" style={{ display: "block" }}>
                                        Description
                                     </label>
                                    <Input
                                        id="description"
                                        placeholder="Enter description of article"
                                        type="text"
                                        value={values.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={cls.input}
                                    />
                                    {errors.description && touched.description && (
                                        <div className={cls.errors}><Alert message={errors.description} type="error" showIcon /></div>
                                    )}
                                    <label htmlFor="email" style={{ display: "block" }}>
                                        Body
                                     </label>
                                    <Input.TextArea
                                        id="body"
                                        placeholder="Enter body of article"
                                        type="text"
                                        value={values.body}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={cls.input}
                                    />
                                    {errors.body && touched.body && (
                                        <div className={cls.errors}><Alert message={errors.body} type="error" showIcon /></div>
                                    )}
                                    <EditableTagGroup
                                        tagList={values.tagList}
                                        updateTagList={(tags) => {
                                            setFieldValue('tagList', tags);
                                        }}
                                    />
                                    <div className={cls.buttonsArea}>
                                        <div>
                                            <button
                                                type="button"
                                                className="outline"
                                                onClick={() => {
                                                    resetErrors()
                                                    handleReset()
                                                }}
                                                disabled={!dirty || isSubmitting}
                                            >
                                                Reset
                                         </button>
                                            <button
                                                type="submit" disabled={isSubmitting}
                                            >
                                                Submit
                                         </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        );
                    }}
                </Formik>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    isCreated: state.articlesData.isCreated,
    status: state.userData.status,
    currentArticle: state.articlesData.currentArticle,
    isReceived: state.articlesData.isReceived
})

const EditArticleContainer = connect(mapStateToProps,
    {
        createArticleThunk,
        setCreatedAC,
        setErrorAC,
        getCurrentArticleAC,
        setRecievedAC
    })(EditArticle)

export default EditArticleContainer;