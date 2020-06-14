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

import { parseISO, differenceInMinutes, getTime, differenceInHours, differenceInDays } from 'date-fns';



const SingleArticlePage = (props) => {
    const { setFavoriteCurrentAC, setUnfavoriteCurrentAC, likeArticle, unfavoriteArticle, article } = props;
    const { body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt } = article;
    const date = Date.now()
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
                <div className={cls.dateValue}>
                    <h4>created</h4>
                    <div className={cls.reversedDate}>
                        {differenceInMinutes(date, getTime(parseISO(`${createdAt}`))) >= 60
                            ? <h4>{`${differenceInMinutes(date, getTime(parseISO(`${createdAt}`)))
                                - (differenceInHours(date, getTime(parseISO(`${createdAt}`))) * 60)} min`}</h4>
                            : differenceInMinutes(date, getTime(parseISO(`${createdAt}`))) < 1
                                ? <h4>less than minute</h4>
                                : <h4>{`${differenceInMinutes(date, getTime(parseISO(`${createdAt}`)))} min`}</h4>
                        }

                        {differenceInHours(date, getTime(parseISO(`${createdAt}`))) >= 24 &&
                            differenceInHours(date, getTime(parseISO(`${createdAt}`)))
                            - (differenceInDays(date, getTime(parseISO(`${createdAt}`))) * 24) > 0
                            ?
                            <h4>{`${differenceInHours(date, getTime(parseISO(`${createdAt}`)))
                                - (differenceInDays(date, getTime(parseISO(`${createdAt}`))) * 24)} hours`}</h4>
                            : ''}
                        {differenceInHours(date, getTime(parseISO(`${createdAt}`))) < 24
                            && differenceInHours(date, getTime(parseISO(`${createdAt}`))) > 0
                            ? <h4> {`${differenceInHours(date, getTime(parseISO(`${createdAt}`)))} hours`} </h4>
                            : ''}

                        {differenceInDays(date, getTime(parseISO(`${createdAt}`))) > 0 ?
                            <h4>{`${differenceInDays(date, getTime(parseISO(`${createdAt}`)))} days `}</h4>
                            : ''
                        }
                    </div>
                    <h4>ago</h4>
                </div>
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