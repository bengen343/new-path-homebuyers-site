class NavBar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <!-- header open -->
                <div class="float-text show-on-scroll">
                    <span><a href="#">Scroll to top</a></span>
                </div>
                <div class="scrollbar-v show-on-scroll"></div>
                
                <!-- page preloader begin -->
                <div id="de-loader"></div>
                <!-- page preloader close -->

                <!-- header begin -->
                <header class="transparent scroll-light has-topbar">
                    <div id="topbar">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="d-flex justify-content-between xs-hide">
                                        <div class="header-widget d-flex">
                                            <div class="topbar-widget"><a href="tel:5037190515"><i class="icofont-phone"></i>(503) 719-0515</a></div>
                                            <div class="topbar-widget"><a href="#"><i class="icofont-envelope"></i>contact@newpathhomebuyers.com</a></div>
                                        </div>

                                        <div class="social-icons">
                                            <a href="#"><i class="fa-brands fa-facebook fa-lg"></i></a>
                                            <a href="#"><i class="fa-brands fa-youtube fa-lg"></i></a>
                                            <a href="#"><i class="fa-brands fa-instagram fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="de-flex sm-pt10">
                                    <div class="de-flex-col">
                                        <!-- logo begin -->
                                        <div id="logo">
                                            <a href="index.html">
                                                <img class="logo-main" src="images/logo/alpaca-round-white.png" width="55" alt="" >
                                                <img class="logo-scroll" src="images/logo/alpaca-round-white.png" width="55" alt="" >
                                                <img class="logo-mobile" src="images/logo/logo-round-white.png" width="55" alt="" >
                                            </a>
                                        </div>
                                        <!-- logo close -->
                        
                                    </div>
                                    <div class="de-flex-col header-col-mid menu_side_area text-center">
                                        <h3 class="logo-main text-white" style="margin-bottom: 0px;">New Path Home Buyers</h3>
                                        <h3 class="logo-scroll" style="margin-bottom: 0px;">New Path Home Buyers</h3>
                                    </div>
                                    <div class="de-flex-col header-col-mid">
                                        <ul id="mainmenu">
                                            <li><a class="menu-item" href="index.html">Home</a></li>
                                            <li><a class="menu-item" href="how.html">How It Works</a></li>
                                            <li><a class="menu-item" href="about.html">Our Company</a>
                                                <ul>
                                                    <li><a class="menu-item" href="product-details-new.html">Contact Us</a></li>
                                                    <li><a class="menu-item" href="products.html">How we calculate your offer</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="menu-item" href="projects.html">FAQ</a></li>
                                            <li><a class="menu-item" href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div class="de-flex-col">
                                        <div class="menu_side_area">          
                                            <a href="contact.html" class="btn-main">Get Your Cash Offer Now!</a>
                                            <span id="menu-btn"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            
        <!-- header close -->
        `;
    }
}
customElements.define('nav-bar', NavBar);
