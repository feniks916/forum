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
import { getSlug, isAuth } from '../../helpers/token';

import { parseISO, differenceInMinutes, getTime, differenceInHours, differenceInDays } from 'date-fns';
import { timeCreator } from '../../helpers/timeCreator';



const SingleArticlePage = (props) => {
    const { setFavoriteCurrentAC, setUnfavoriteCurrentAC, likeArticle, unfavoriteArticle, article } = props;
    const { body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt } = article;
    const date = Date.now();
    let history = useHistory();
    const sessionSlug = sessionStorage.getItem('slug')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await instance.get(`/api/articles/${sessionSlug}`)
                props.getCurrentArticleAC(result.data.article)
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
        likeArticle(slug)
        setFavoriteCurrentAC(slug)
    }

    const dislikeArticle = (slug) => {
        unfavoriteArticle(slug)
        setUnfavoriteCurrentAC(slug)
    }
    const redirectToArticles = () => {
        history.push("/forum/articles");
    }

    return (article.hasOwnProperty('body') &&
        <div className={cls.wrapper}>
             <button 
             className={cls.redirect}
            onClick={redirectToArticles}
            type="primary" key="console">Atricles</button>
            <div className={cls.body}>
                <img src='https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/28/2019/09/101_0001_alexandru-acea-bbokzTQjB9o-unsplash-1024x777.jpg' alt="pic" />
                <div className={cls.dateValue}>
                <p>{`created by ${author.username}`}</p>
                    <div className={cls.reversedDate}>
                       <h4> {timeCreator(createdAt)}</h4>
                    </div>
                    <h4>ago</h4>
                </div>
                <h2>{title}</h2>
                <h5>{`description: ${description}`}</h5>
                <div className={cls.article_body}>
                <p>{body}</p>
                </div>
                <ul>
                    <span>{tagList.length > 0 ? 'tags:' : 'tags: -' }</span>
                    {tagList.map((el, index) => {
                        return <li key={index}><p>{el}</p></li>
                    })}
                </ul>
               {isAuth() && <div>
                {article.favorited ? <button
                    onClick={(e) => {
                        e.stopPropagation();
                        dislikeArticle(getSlug())
                    }}
                ><h5><HeartFilled /></h5><h5>{article.favoritesCount}</h5></button>
                    : <button
                    disabled={!isAuth()}
                        onClick={(e) => {
                            e.stopPropagation();
                            addLikeToArticle(getSlug())
                        }}
                    ><h5><HeartOutlined /></h5><h5>{article.favoritesCount}</h5></button>}</div>}
                 {!isAuth() && <h5>{`likes: ${article.favoritesCount}`}</h5> }   
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