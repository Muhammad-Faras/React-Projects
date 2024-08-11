import React from 'react';
import Index from '../../components/layout/Index';
import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePiedPiper } from '@fortawesome/free-brands-svg-icons';
import { faBookmark, faImage, faBriefcase, faNewspaper, faCaretDown, faEllipsis, faXmark, faRetweet, faPaperPlane, faCircleInfo, faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faCommentDots, } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
    return (
        <Index>
            <div className={`${styles.parentSection}`}>

                <div className={`${styles.mainSection}`}>
                    {/* profileSection starts here */}
                    <div className={`${styles.profileSection}`}>
                        <div className={`${styles.profileinfo}`}>
                            <div className={`${styles.profileheader}`}>
                                <div className={`${styles.pheaderimg}`}>
                                    <img src="./images/profile_img.jpeg" alt="profile img" />
                                </div>
                                <p>Muhammad Faras</p>
                                <p>Python & Django Developer | HTML | CSS | Tailwind CSS | Git</p>
                            </div>
                            <div className={`${styles.profileAnalytics}`}>
                                <div className={`${styles.views}`}>
                                    <p>Profile Viewers</p>
                                    <p>20</p>
                                </div>
                                <div className={`${styles.impressions}`}>
                                    <p>Profile Impressions</p>
                                    <p>234</p>
                                </div>
                            </div>
                            <div className={`${styles.profilePremiumAdd}`} >
                                <p> Unlock Premium tools & insights</p>
                                <p><FontAwesomeIcon icon={faSquarePiedPiper} style={{ color: "#FFD43B", marginRight: '3px', }} />Try Premium for PKR0</p>
                            </div>
                            <div className={`${styles.profileSaveItem}`}>
                                <FontAwesomeIcon icon={faBookmark} />
                                <p>save item</p>
                            </div>
                        </div>
                        <div className={`${styles.recentinfo}`}>

                        </div>
                    </div>

                    {/* -------------------------- */}
                    {/* contentSection starts here */}
                    {/* -------------------------- */}

                    <div className={`${styles.contentSection}`}>
                        <div className={`${styles.postInput}`}>
                            <div className={`${styles.postEntry}`}>
                                <img src="./images/profile_img.jpeg" alt="profile img" />
                                <input type="text" name="" id="" placeholder='Start a post,try writing with AI' />
                            </div>
                            <div className={`${styles.postBtns}`}>
                                <button>
                                    <FontAwesomeIcon icon={faImage} style={{ color: "#378FE9", fontSize: '1.3rem' }} />
                                    Media
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faBriefcase} style={{ color: "#A871EA", fontSize: '1.3rem' }} />
                                    Job
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faNewspaper} style={{ color: "#E06847", fontSize: '1.3rem' }} />
                                    Write Article
                                </button>

                            </div>
                        </div>
                        <div className={`${styles.divider}`}>
                            <div></div>
                            <p>Sort by:</p>
                            <p>Top</p>
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "#000000", fontSize: '1rem', cursor: 'pointer' }} />
                        </div>
                        <div className={`${styles.postContent}`}>
                            <div className={`${styles.postCard}`}>
                                <div className={`${styles.UserContent}`}>
                                    <div className={`${styles.userData}`}>
                                        <img src="./images/user.jpeg" alt="post user profile img" />
                                        <div className={`${styles.userInfo}`}>
                                            <p>Verified Pakistan Recorder</p>
                                            <p>610,450 followers</p>
                                            <p>42m </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.contentActions}`}>
                                        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#191919", fontSize: '1.5em', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faXmark} style={{ color: "#191919", fontSize: '1.5em', cursor: 'pointer' }} />
                                    </div>
                                </div>
                                <div className={`${styles.contentTitle}`}>
                                    <p>Chairman of the Athletics Federation of Pakistan, Major General (Retired) Muhammad Akram Sahi, announced that Arshad Nadeem will be sent on an Umrah pilgrimage along with his
                                        <span>…see more</span>
                                    </p>
                                </div>
                                <img src="./images/post.jpeg" alt="post pic" className={`${styles.postImage}`} />
                                <div className={`${styles.contentReactions}`}>
                                    <button><FontAwesomeIcon icon={faThumbsUp} flip="horizontal" style={{ fontSize: '1.5rem' }} /><span>Like</span></button>
                                    <button><FontAwesomeIcon icon={faCommentDots} flip="horizontal" style={{ fontSize: '1.5rem' }} /><span>Comment</span></button>
                                    <button><FontAwesomeIcon icon={faRetweet} flip="horizontal" style={{ fontSize: '1.5rem' }} /><span>Repost</span></button>
                                    <button><FontAwesomeIcon icon={faPaperPlane} flip="horizontal" style={{ fontSize: '1.5rem' }} /><span>Send</span></button>

                                </div>
                            </div>
                            <div className={`${styles.postCard}`}>
                                <div className={`${styles.UserContent}`}>
                                    <div className={`${styles.userData}`}>
                                        <img src="./images/user.jpeg" alt="post user profile img" />
                                        <div className={`${styles.userInfo}`}>
                                            <p>Verified Pakistan Recorder</p>
                                            <p>610,450 followers</p>
                                            <p>42m </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.contentActions}`}>
                                        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#191919", fontSize: '1.5em', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faXmark} style={{ color: "#191919", fontSize: '1.5em', cursor: 'pointer' }} />
                                    </div>
                                </div>
                                <div className={`${styles.contentTitle}`}>
                                    <p>Chairman of the Athletics Federation of Pakistan, Major General (Retired) Muhammad Akram Sahi, announced that Arshad Nadeem will be sent on an Umrah pilgrimage along with his
                                        <span>…see more</span>
                                    </p>
                                </div>
                                <img src="./images/post.jpeg" alt="post pic" className={`${styles.postImage}`} />
                                <div className={`${styles.contentReactions}`}>
                                    <button><FontAwesomeIcon icon={faThumbsUp} flip="horizontal" style={{ fontSize: '1.5rem' }} /><span>Like</span></button>
                                    <button><FontAwesomeIcon icon={faCommentDots} flip="horizontal" style={{ fontSize: '1.5rem' }} /><span>Comment</span></button>
                                    <button><FontAwesomeIcon icon={faRetweet} flip="horizontal" style={{ fontSize: '1.5rem' }} /><span>Repost</span></button>
                                    <button><FontAwesomeIcon icon={faPaperPlane} flip="horizontal" style={{ fontSize: '1.5rem' }} /><span>Send</span></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------------------- */}
                {/* suggestionSection starts here */}
                {/* -------------------------- */}
                <div className={`${styles.suggestionSection}`}>
                    <div className={`${styles.suggestionCard}`}>
                        <div className={`${styles.suggestionTitle}`}>
                            <p>Add to your feed</p>
                            <FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: '1.3rem' }} />
                        </div>
                        <a href='#' className={`${styles.userSuggestion}`}>
                            <img src="./images/user.jpeg" alt="post user profile img" />
                            <div className={`${styles.userInfo}`}>
                                <p>Muahammad Faras</p>
                                <p>27M+ reach | Chairman Cordoba LV | Director NETSOL Technologies | Co-</p>
                                <button>
                                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.3rem' }} />
                                    Follow
                                </button>
                            </div>
                        </a>
                        <a href='#' className={`${styles.userSuggestion}`}>
                            <img src="./images/user.jpeg" alt="post user profile img" />
                            <div className={`${styles.userInfo}`}>
                                <p>Muahammad Faras</p>
                                <p>27M+ reach | Chairman Cordoba LV | Director NETSOL Technologies | Co-</p>
                                <button>
                                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.3rem' }} />
                                    Follow
                                </button>
                            </div>
                        </a>
                        <a href='#' className={`${styles.userSuggestion}`}>
                            <img src="./images/user.jpeg" alt="post user profile img" />
                            <div className={`${styles.userInfo}`}>
                                <p>Muahammad Faras</p>
                                <p>27M+ reach | Chairman Cordoba LV | Director NETSOL Technologies | Co-</p>
                                <button>
                                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.3rem' }} />
                                    Follow
                                </button>
                            </div>
                        </a>
                        <div className={`${styles.allSuggestionRef}`}>
                            <p>View all recommendations </p>
                            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1.3rem' }} />
                        </div>
                    </div>
                </div>
            </div>
        </Index >
    );
};

export default Home;
