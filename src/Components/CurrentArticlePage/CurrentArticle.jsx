import { connect } from 'react-redux';
import { thunk } from '../../Redux/mainPageReducer';
import { getCurrentArticleAC } from '../../Redux/Article';

import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import cls from './current.module.scss';
import instance from '../../API/API'

const SingleArticlePage = (props) => {
    const {body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt} = props.article;
    const sessionSlug = sessionStorage.getItem('slug')
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
    }, [sessionSlug, body])
    return ( props.article.hasOwnProperty('body') && 
        <div className={cls.wrapper}>
            <p>{body}</p>
            <p>{author.username}</p>
            <p>{description}</p>
            <p>{favoritesCount}</p>
            <p>{title}</p>
            <p>{createdAt}</p>
            <NavLink to='/forum/articles'>All Articles</NavLink>
        </div>
    )
}

const mapStateToProps = (state) => ({
    article: state.articlesData.currentArticle,
})

const SingleArticleContainer = connect(mapStateToProps, { thunk, getCurrentArticleAC })(SingleArticlePage)

export default SingleArticleContainer;