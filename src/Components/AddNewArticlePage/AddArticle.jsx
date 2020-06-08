import { connect } from 'react-redux';
import { createArticleThunk } from '../../Redux/Article';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import cls from './add.module.scss';
import { isAuth,getJwt, getName } from '../../helpers/token';

const DevelopmentPage = (props) => {
    const { error, createArticleThunk  } = props;

    console.log(isAuth())
    return (
        <div className={cls.wrapper}>
            <NavLink to='/forum/articles'>All Articles</NavLink>
            <Formik
                initialValues={{ title: "", description: "", body: "", tags: [] }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    createArticleThunk({article: {
                        title: values.title,
                        description: values.description,
                        body: values.body,
                        tagList: ''
                      }})
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
                            {error !== null && error !== 'undefined' && (
                                <div className={cls.errors}><p>{`email or password ${error["email or password"]}`}</p></div>
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
                            {error !== null && error !== 'undefined' && (
                                <div className={cls.errors}><p>{`email or password ${error["email or password"]}`}</p></div>
                            )}
                                <label htmlFor="email" style={{ display: "block" }}>
                                Tags
                                </label>
                             <Input
                                id="tags"
                                placeholder="Enter your name"
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
    status: state.userData.status
})

const DevelopmentPageContainer = connect(mapStateToProps, { createArticleThunk })(DevelopmentPage)

export default DevelopmentPageContainer;