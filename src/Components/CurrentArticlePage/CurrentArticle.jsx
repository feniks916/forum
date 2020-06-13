import { connect } from 'react-redux';
import { thunk } from '../../Redux/mainPageReducer';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import cls from './current.module.scss';
import instance from '../../API/API';
import {
    unfavoriteArticle,
    likeArticle,
    setFavoriteCurrentAC,
    setUnfavoriteCurrentAC,
    getCurrentArticleAC,
} from '../../Redux/Article';
import { getSlug } from '../../helpers/token';



const SingleArticlePage = (props) => {
    const { setFavoriteCurrentAC, setUnfavoriteCurrentAC, likeArticle, unfavoriteArticle, article } = props;
    const { body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt } = article;
    console.log(article)
    const sessionSlug = sessionStorage.getItem('slug')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await instance.get(`/api/articles/${sessionSlug}`)
                const { body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt } = result.data.article
                props.getCurrentArticleAC(body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt)
            } catch (error) {
                if (error) {
                    console.log(error)
                }
            }
        }
        if (sessionSlug !== null) {
            fetchData();
        }
    }, [sessionSlug, body])

    const addLikeToArticle = (slug) => {
        console.log(slug)
        likeArticle(slug)
        setFavoriteCurrentAC(slug)
    }

    const dislikeArticle = (slug) => {
        console.log(slug)
        unfavoriteArticle(slug)
        setUnfavoriteCurrentAC(slug)
    }


    return (article.hasOwnProperty('body') &&
        <div className={cls.wrapper}>
            <div className={cls.body}>
                <img src='https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/28/2019/09/101_0001_alexandru-acea-bbokzTQjB9o-unsplash-1024x777.jpg' alt="pic" />
                <p>{body}</p>
                <p>{author.username}</p>
                <p>{description}</p>
                <p>{favoritesCount}</p>
                <p>{title}</p>
                <p>{createdAt}</p>
                <ul>
                    {tagList.map(el => {
                        return <li><p>{el}</p></li>
                    })}
                </ul>
                {article.favorited ? <button
                    onClick={(e) => {
                        e.stopPropagation();
                        dislikeArticle(getSlug())
                    }}
                ><h5><HeartFilled /></h5><h5>{article.favoritesCount}</h5></button>
                    : <button
                        onClick={(e) => {
                            e.stopPropagation();
                            addLikeToArticle(getSlug())
                        }}
                    ><h5><HeartOutlined /></h5><h5>{article.favoritesCount}</h5></button>}
                <NavLink to='/forum/articles'>All Articles</NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    article: state.articlesData.currentArticle,
})

const SingleArticleContainer = connect(mapStateToProps, {
    unfavoriteArticle,
    likeArticle,
    setFavoriteCurrentAC,
    setUnfavoriteCurrentAC,
    getCurrentArticleAC
})(SingleArticlePage)

export default SingleArticleContainer;