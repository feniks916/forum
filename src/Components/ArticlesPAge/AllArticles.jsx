import { connect } from 'react-redux';
import { thunk } from '../../Redux/mainPageReducer';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import instance from '../../API/API'
import { useHistory } from "react-router-dom";
import cls from './all.module.scss';
import { Pagination } from 'antd';
import { setArticlesAC, 
         setPageNumberAC, 
         setLoadingAC, 
         getArticle, 
         getSlugAC, 
         deleteArticle, 
         likeArticle, 
         unfavoriteArticle,
         setFavoriteAC,
         setUnfavoriteAC } from '../../Redux/Article'
import { getName } from '../../helpers/token';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import { parseISO, differenceInMinutes, getTime, differenceInHours, differenceInDays } from 'date-fns';

const ArticlesPage = (props) => {
    const history = useHistory();
    const username = getName();
    const {articles, pageSize, pageNumber, setArticlesAC, setLoadingAC, setPageNumberAC, getSlugAC, setFavoriteAC,setUnfavoriteAC} = props 
    const date = Date.now()
    console.log(date)


    const [pagesQuantity, seTpagesQuantity] = useState(1);
    const [page, seTpage] = useState(props.pageNumber)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await instance.get(`/api/articles?offset=${pageNumber === 1 ? 0 : (pageNumber - 1) * (pageSize)}&limit=${pageSize}`)
                setArticlesAC(result.data.articles, result.data.articlesCount, true, result.data.favorited)
                seTpagesQuantity(Math.ceil(result.data.articlesCount / pageSize))
            } catch (error) {
                if (error) {
                    console.log(error)
                }
            }
        }
        fetchData();
    }, [pageNumber])

    const onChange = page => {
        setLoadingAC(false)
        setPageNumberAC(page)
        seTpage(page)
    };
    const getSlug = (slug) => {
        history.push("/forum/article");
        sessionStorage.setItem('slug', slug);
        getSlugAC(slug)
    }
    const deleteArticle = (slug) => {
        props.deleteArticle(slug)
    }
    const likeArticle = (slug) => {
            props.likeArticle(slug)
            setFavoriteAC(slug)
    }

    const dislikeArticle = (slug) => {
        props.unfavoriteArticle(slug)
        setUnfavoriteAC(slug)
    }
    const createArtice = () => {
        history.push("/forum/developmentPage");
    }
    return (
        <div className={cls.wrapper}>
            <button
                onClick={createArtice}> <h4>
                Create Article</h4></button>
            <div className={cls.pagination}>
                {pagesQuantity !== 0 &&
                    <Pagination
                        defaultCurrent={1}
                        current={page}
                        onChange={onChange}
                        showSizeChanger={false}
                        pageSize={props.pageSize}
                        total={props.articlesQuantity}
                    />}
            </div>
            <ul className={cls.ul}>
                {articles !== 'undefined' && props.isLoaded &&  articles.map((el, index) => {
                        return <li key={index}
                       onClick={() => getSlug(el.slug)}
                   >
                       <div className={cls.card}>
                           <img src="https://i.pinimg.com/564x/e4/60/f7/e460f7091d13115e6f0f22f5662b3fe7.jpg" alt="mountain" />
                           <div className={cls.Card_leftside}>
                           <div className={cls.authorInfo}>
                               <h2>{el.title}</h2>
                               <p>{el.author.username}</p>
                               <h4> {el.tagList.join(', ')}</h4>
                                   <div className={cls.dateValue}>
                               <h4>created</h4>
                               <div className={cls.reversedDate}>
                                {differenceInMinutes( date, getTime(parseISO(`${el.createdAt}`))) >= 60 
                                    ?<h4>{ `${differenceInMinutes( date, getTime(parseISO(`${el.createdAt}`)))
                                     - (differenceInHours( date, getTime(parseISO(`${el.createdAt}`))) * 60)} min`}</h4>
                                     : differenceInMinutes( date, getTime(parseISO(`${el.createdAt}`))) < 1 
                                     ? <h4>less than minute</h4>
                                     : <h4>{`${differenceInMinutes( date, getTime(parseISO(`${el.createdAt}`)))} min`}</h4> 
                               } 
                               
                                {differenceInHours( date, getTime(parseISO(`${el.createdAt}`))) >= 24 &&
                                differenceInHours( date, getTime(parseISO(`${el.createdAt}`)))
                                - (differenceInDays( date, getTime(parseISO(`${el.createdAt}`))) * 24) > 0
                                ? 
                                <h4>{`${differenceInHours( date, getTime(parseISO(`${el.createdAt}`)))
                               - (differenceInDays( date, getTime(parseISO(`${el.createdAt}`))) * 24)} hours`}</h4>
                               : ''} 
                               { differenceInHours( date, getTime(parseISO(`${el.createdAt}`))) < 24 
                               && differenceInHours( date, getTime(parseISO(`${el.createdAt}`))) > 0
                               ?<h4> {`${differenceInHours( date, getTime(parseISO(`${el.createdAt}`)))} hours`} </h4>
                               : '' }

                                {differenceInDays( date, getTime(parseISO(`${el.createdAt}`))) > 0 ?
                                  <h4>{`${ differenceInDays( date, getTime(parseISO(`${el.createdAt}`)))} days `}</h4>
                                   : ''
                            }
                            </div>
                            <h4>ago</h4>
                               </div>
                           </div>
                           <div className={cls.textBody}>
                               <h3>{el.body}</h3>
                           </div>
                           <div className={cls.cardFooter}>
                           {username === el.author.username &&
                               <button
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       getSlug(el.slug)
                                       history.push("/forum/editPage");
                                   }}
                               >
                                   <h4> Change Article</h4>
                               </button>}
                           {username === el.author.username &&
                               <button
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       deleteArticle(el.slug)
                                   }}
                               >
                                   <h4> Delete Article</h4>
                               </button>}
                               <h5>{el.description}</h5>
                                    {el.favorited ? <button
                                          onClick={(e) => {
                                              e.stopPropagation();
                                               dislikeArticle(el.slug)}}
                                      ><h5><HeartFilled /></h5><h5>{el.favoritesCount}</h5></button>
                                       : <button
                                          onClick={(e) => {
                                              e.stopPropagation();
                                              likeArticle(el.slug)}}
                                      ><h5><HeartOutlined /></h5><h5>{el.favoritesCount}</h5></button>}
                                      
                           </div>
                           </div>
                       </div>
                   </li>

                })}
            </ul>
            <div>
                <p>{!props.isLoaded && '...loading'}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    articles: state.articlesData.articles,
    pageSize: state.articlesData.pageSize,
    pageNumber: state.articlesData.pageNumber,
    isLoaded: state.articlesData.isLoaded,
    articlesQuantity: state.articlesData.articlesQuantity,
    favoriteArticles: state.articlesData.favoriteArticles
})

const AllArticlesContainer = connect(mapStateToProps,
    {
        setArticlesAC,
        setPageNumberAC,
        setLoadingAC,
        getArticle,
        getSlugAC,
        deleteArticle,
        unfavoriteArticle,
        likeArticle,
        setFavoriteAC,
        setUnfavoriteAC
    })(ArticlesPage)

export default AllArticlesContainer;