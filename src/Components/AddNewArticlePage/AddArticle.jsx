import { connect } from 'react-redux';
import { createArticleThunk } from '../../Redux/Article';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import cls from './add.module.scss';
import {CloseCircleOutlined} from '@ant-design/icons';

const DevelopmentPage = (props) => {
    const { error, createArticleThunk } = props;
    const [tagsArray, setTagsArray] = useState([]);
    let tagInput = '';
    console.log(tagsArray)

    const removeTag = (i) => {
        const arr = tagsArray.splice(i, 1)
        setTagsArray(tagsArray.filter(el => el !== arr[0]));
    }

    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Shift' && val) {
            if (tagsArray.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            setTagsArray(tagsArray.concat(val));
            tagInput.value = null;
        } else if (e.key === 'Backspace' && !val) {
            removeTag(tagsArray.length - 1);
        }
    }
    return (
        <div className={cls.wrapper}>
            <NavLink to='/forum/articles'>All Articles</NavLink>
            <Formik
                initialValues={{ title: "", description: "", body: "", tags: tagsArray }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    createArticleThunk({
                        article: {
                            title: values.title,
                            description: values.description,
                            body: values.body,
                            tagList: values.tags
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
                                placeholder="Enter your email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={cls.input}
                            />
                            {error !== '' && error.title !== 'undefined' && (
                                <div className={cls.errors}><p>{`title ${error.title[0]}`}</p></div>
                            )}
                            <label htmlFor="email" style={{ display: "block" }}>
                                Description
                                </label>
                            <Input
                                id="description"
                                placeholder="Enter your name"
                                type="text"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={cls.input}
                            />
                            {error !== '' && error.description !== 'undefined' && (
                                <div className={cls.errors}><p>{`description ${String(error.description[0])}`}</p></div>
                            )}
                            <label htmlFor="email" style={{ display: "block" }}>
                                Body
                                </label>
                            <Input.TextArea
                                id="body"
                                placeholder="Enter your name"
                                type="text"
                                value={values.body}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={cls.input}
                            />
                            {error !== '' && error.body !== 'undefined' && (
                                <div className={cls.errors}><p>{`body ${error.body[0]}`}</p></div>
                            )}
                            <label htmlFor="email" style={{ display: "block" }}>
                                Tags
                                </label>
                            <div className={cls.tagsArea}>
                                <ul className={cls.tagsUl}>
                                    {tagsArray.map((tag, i) => (
                                        <li key={tag}>
                                            <h4>
                                            {tag}
                                            <button type="button" onClick={() => { removeTag(i) }}><CloseCircleOutlined /></button>
                                            </h4>
                                        </li>
                                    ))}
                                    <li className={cls.tagsInput}>
                                        <input type="text" placeholder="press shift for adding tag" onKeyDown={inputKeyDown} ref={c => { tagInput = c; }} />
                                    </li>
                                </ul>
                            </div>
                            <div className={cls.buttonsArea}>
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
    error: state.articlesData.error,
    status: state.userData.status
})

const DevelopmentPageContainer = connect(mapStateToProps, { createArticleThunk })(DevelopmentPage)

export default DevelopmentPageContainer;