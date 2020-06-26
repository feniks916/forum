import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import instance from '../../API/API';
import cls from './all.module.scss';
import { Pagination, Button, notification } from 'antd';
import {
    setArticlesAC,
    setPageNumberAC,
    setLoadingAC,
    getArticle,
    getSlugAC,
    deleteArticle,
    likeArticle,
    unfavoriteArticle,
    setFavoriteAC,
    setUnfavoriteAC,
    setErrorAC,
    setRecievedAC
} from '../../Redux/Article';
import {setStatusAC} from '../../Redux/userReducer';
import { getName, isAuth, removeJwt } from '../../helpers/token';
import { HeartOutlined, HeartFilled, CloseCircleOutlined, SettingFilled } from '@ant-design/icons';
import { timeCreator } from '../../helpers/timeCreator';
import { onChangePageNumber } from '../../helpers/pagination';

const AllArticles = (props) => {
    const history = useHistory();
    const username = getName();
    const { articles, 
        pageSize, 
        pageNumber, 
        setArticlesAC, 
        setLoadingAC, 
        setPageNumberAC, 
        getSlugAC, 
        setFavoriteAC, 
        setUnfavoriteAC,
        setErrorAC,
        getArticle,
        setRecievedAC,
    } = props
    const date = Date.now()

    const [pagesQuantity, seTpagesQuantity] = useState(1);
    const [page, seTpage] = useState(props.pageNumber)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await instance.get(`/api/articles?offset=${onChangePageNumber(pageNumber,pageSize)}&limit=${pageSize}`)
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
        localStorage.setItem('slug', slug);
        getSlugAC(slug)
    }
    const deleteArticle = (slug) => {
        props.deleteArticle(slug)
    }

    const close = () => {
        console.log(
          'Notification was closed. Either the close button was clicked or duration time elapsed.',
        );
      };

    const openNotification = (slug) => {
        const key = `open${Date.now()}`;
        const btn = (
          <Button type="primary" size="small" onClick={() =>{ 
              notification.close(key)
            deleteArticle(slug)
          }}>
            Confirm
          </Button>
        );
        notification.open({
          message: 'Notification Title',
          description:
            'Are you really want to delete this article?',
          btn,
          key,
          onClose: close,
        });
    };

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
        setRecievedAC(true)
    }
    const redirectToLogin = () => {
        history.push("/forum/LoginPage");
    }
    const deleteToken = () => {
        removeJwt('cool-jwt')
        props.history.push('/forum/LoginPage');
        return props.setStatusAC({data: 401});
        setErrorAC('')
      }
    return (
        <div className={cls.wrapper}>
            {!isAuth() 
            ? <div className={cls.registered}> <button
                onClick={redirectToLogin}
                className={cls.articles}> <h4>Login</h4></button> </div>
                : <div className={cls.registered}> <button
                onClick={createArtice}> <h4>
                    Create Article</h4>
            </button>
                <button
                    onClick={deleteToken}
                > <h4> Log Out</h4> </button> </div>
            }
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
                {articles !== 'undefined' && props.isLoaded && articles.map((el, index) => {
                    return <li key={index}
                        onClick={() => getSlug(el.slug)}
                    >
                        <div className={cls.card}>
                            <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/14-768x720.jpg" alt="mountain" />
                            <div className={cls.Card_leftside}>
                                <div className={cls.authorInfo}>

                                    <div className={cls.dateValue}>
                                        <p>{`created by ${el.author.username}`}</p>
                                        <div className={cls.reversedDate}>
                <h4>{timeCreator(el.createdAt) }</h4>
                                        </div>
                                        <h4>ago</h4>
                                    </div>
                                    <h2>{el.title}</h2>
                                    {el.tagList.length > 0 ?
                                        <h4>{`tags: ${el.tagList.join(', ')}`}</h4>
                                        : <h4>tags: -</h4>
                                    }
                                </div>
                                <div className={cls.cardFooter}>
                                    {username === el.author.username &&
                                        <button
                                        className={cls.change}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                getSlug(el.slug)
                                                getArticle(el.slug)
                                                history.push("/forum/developmentPage")
                                            }}
                                        >
                                            <h4> Change Article <SettingFilled /></h4>
                                        </button>}
                                    {username === el.author.username &&
                                        <button
                                        className={cls.delete}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openNotification(el.slug)
                                            }}
                                        >
                                            <h4> Delete Article <CloseCircleOutlined /></h4>
                                        </button>}
                                    {isAuth() && <div>
                                        {el.favorited ? <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                dislikeArticle(el.slug)
                                            }}
                                        ><h5><HeartFilled /></h5><h5>{el.favoritesCount}</h5></button>
                                            : <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    likeArticle(el.slug)
                                                }}
                                            ><h5><HeartOutlined /></h5><h5>{el.favoritesCount}</h5></button>}</div>}
                                    {!isAuth() && <h5>likes: {el.favoritesCount}</h5>}

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
        setUnfavoriteAC,
        setStatusAC,
        setErrorAC,
        setRecievedAC
    })(AllArticles)

export default AllArticlesContainer;