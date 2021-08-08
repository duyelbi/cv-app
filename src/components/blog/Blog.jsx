import React from 'react'

const Blog = () => {
    return (
        <section className="blog background_gpattern" id="blog">
            <div className="container d-flex flex-column justify-content-between h-100 ">
                <div className="section-title flex-grow-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-left">
                                <h2 data-aos="heading-show" className="text_background aos-init">
                                    My Articles
                                    <span className="heading_background">Blog</span>
                                </h2>
                                <p className="m-0">The standard chunk of Lorem Ipsum used since the 1500s</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-content flex-grow-1">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="news-item mb-5 mb-lg-0">
                                <div className="news-cover">
                                    <img src="./assets/images/blog1.jpg" width="508" height="336" alt=""
                                        className="img-fluid" />
                                </div>
                                <div className="news-content p-4">
                                    <div className="news-title mb-3">
                                        <a href="blog.html" className="blog-permalink">
                                            <h3>How to write website content.</h3>
                                        </a>
                                    </div>
                                    <div className="news-meta d-flex flex-row mb-4">
                                        <div className="news-meta-single mr-3">
                                            <span className="mbri-calendar"></span>
                                            <span className="meta-value">11 March, 2021</span>
                                        </div>
                                        <div className="news-meta-single">
                                            <span className="mbri-user"></span>
                                            <span className="meta-value">by <a href="#">Kevin Miller</a></span>
                                        </div>
                                    </div>
                                    <div className="readMore">
                                        <a href="blog.html" className="btn btn-outline-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="news-item mb-5 mb-lg-0">
                                <div className="news-cover">
                                    <img src="./assets/images/blog3.jpg" width="508" height="336" alt=""
                                        className="img-fluid" />
                                </div>
                                <div className="news-content p-4">
                                    <div className="news-title mb-3">
                                        <a href="blog.html" className="blog-permalink">
                                            <h3>9 Simple Tips for Graphic Designers</h3>
                                        </a>
                                    </div>
                                    <div className="news-meta d-flex flex-row mb-4">
                                        <div className="news-meta-single mr-3">
                                            <span className="mbri-calendar"></span>
                                            <span className="meta-value">29 March, 2021</span>
                                        </div>
                                        <div className="news-meta-single">
                                            <span className="mbri-user"></span>
                                            <span className="meta-value">by <a href="">Kevin Miller</a></span>
                                        </div>
                                    </div>
                                    <div className="readMore">
                                        <a href="blog.html" className="btn btn-outline-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="news-item mb-5 mb-lg-0">
                                <div className="news-cover">
                                    <img src="./assets/images/blog2.jpg" width="508" height="336" alt=""
                                        className="img-fluid" />
                                </div>
                                <div className="news-content p-4">
                                    <div className="news-title mb-3">
                                        <a href="blog.html" className="blog-permalink">
                                            <h3>How Does Technology Change Lives</h3>
                                        </a>
                                    </div>
                                    <div className="news-meta d-flex flex-row mb-4">
                                        <div className="news-meta-single mr-3">
                                            <span className="mbri-calendar"></span>
                                            <span className="meta-value">15 April, 2021</span>
                                        </div>
                                        <div className="news-meta-single">
                                            <span className="mbri-user"></span>
                                            <span className="meta-value">by <a href="#">Kevin Miller</a></span>
                                        </div>
                                    </div>
                                    <div className="readMore">
                                        <a href="blog.html" className="btn btn-outline-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
