import { connect } from 'react-redux';
import { getCurrentArticleAC } from '../../Redux/Article';
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import cls from './edit.module.scss';
import instance, {updateArticle} from '../../API/API'

const EditPage = (props) => {
    const { error, thunk, currentArticle, slug } = props;
    const {body, description, title, tagList} = currentArticle;
    const sessionSlug = sessionStorage.getItem('slug')
    console.log(sessionSlug)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await instance.get(`/api/articles/${sessionSlug}`)
                console.log(result.data.article)
                const {body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt} = result.data.article
                props.getCurrentArticleAC(body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt)
            } catch (error) {
                if (error) {
                    console.log(error)
                }
            }
        }
        if(sessionSlug !== null) {
        fetchData();
        }
    }, [slug, body])

    let history = useHistory(); 

    return ( currentArticle.hasOwnProperty('body') && 
        <div className={cls.wrapper}>
            <Formik
                initialValues={{ title: title, 
                    description: description, 
                    body: body, 
                    tags: tagList }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    updateArticle({
                        article: {
                            title: values.title,
                            description: values.description,
                            body: values.body
                          }
                    })
                }}
            >
                {props => {
                    const {
                        values,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                    <form onSubmit={handleSubmit} className={cls.form}>
                        <label htmlFor="email" style={{ display: "block" }}>
                            Title
                         </label>
                        <Input
                            id="title"
                            placeholder="title"
                            type="text"
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={cls.input}
                        />
                        <label htmlFor="email" style={{ display: "block" }}>
                            Description
                            </label>
                        <Input
                            id="description"
                            placeholder="description"
                            type="text"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={cls.input}
                        />
                        {error !== null && error !== 'undefined' && (
                            <div className={cls.errors}><p>{`email or password ${error["email or password"]}`}</p></div>
                        )}
                            <label htmlFor="email" style={{ display: "block" }}>
                            Body
                            </label>
                        <Input.TextArea
                            id="body"
                            placeholder="body"
                            type="text"
                            value={values.body}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={cls.input}
                        />
                        {error !== null && error !== 'undefined' && (
                            <div className={cls.errors}><p>{`email or password ${error["email or password"]}`}</p></div>
                        )}
                            <label htmlFor="email" style={{ display: "block" }}>
                            Tags
                            </label>
                         <Input
                            id="tags"
                            placeholder="tags"
                            type="text"
                            value={values.tags}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={cls.input}
                        />
                        {error !== null && error !== 'undefined' && (
                            <div className={cls.errors}><p>{`email or password ${error["email or password"]}`}</p></div>
                        )}
                        <div className={cls.buttonsArea}>
                            <NavLink to='/forum/articles'>All Articles</NavLink>
                            <div>
                                <button
                                    type="button"
                                    className="outline"
                                    onClick={handleReset}
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
                );
            }}
        </Formik>
    </div>
)
}

const mapStateToProps = (state) => ({
    error: state.userData.error,
    currentArticle: state.articlesData.currentArticle,
    slug: state.articlesData.slug
})

const EditPageContainer = connect(mapStateToProps, { getCurrentArticleAC })(EditPage)

export default EditPageContainer;