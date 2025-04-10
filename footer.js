class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <section class="bg-color-2 section-dark pt60 pb60">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                            <a href="tel:+15037190515" class="d-block relative bg-dark text-light p-2 rounded-10px">
                                <i class="id-color-2 p-3 rounded-10px fs-56 icofont-phone-circle"></i>
                                <div class="absolute abs-middle ml90">
                                    <span>Call to receive your offer</span>
                                    <h4>(503) 719-0515</h4>
                                </div>
                            </a>
                        </div>                        
                        <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                            <a href="contact.html" class="d-block relative bg-dark text-white p-2 rounded-10px">
                                <i class="id-color-2 p-3 rounded-10px fs-56 icofont-calculator"></i>
                                <div class="absolute abs-middle ml90">
                                    <span>Request</span>
                                    <h4>Your Free Cash Offer</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".6s">
                            <a href="projects.html" class="d-block relative bg-dark text-white p-2 rounded-10px">
                                <i class="id-color-2 p-3 rounded-10px fs-56 icofont-image"></i>
                                <div class="absolute abs-middle ml90">
                                    <span>Discover</span>
                                    <h4>Our Latest Project</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        <!-- content close -->
        
        <!-- footer begin -->
        <footer class="section-dark">
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-4 col-sm-6">
                        <img src="images/logo/logo-round-white.png" alt="" width="75px">
                        <div class="spacer-20"></div>
                        <p>We buy properties in cash, so there’s no need to involve banks or real estate agents. This makes the entire process simpler and faster! If you accept our cash offer, we’ll close at a Title Company on a date that works for you. It’s that easy!</p>

                        <div class="social-icons mb-sm-30">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
                        <div class="row">
                            <div class="col-lg-6 col-sm-6">
                                <div class="widget">
                                    <h5>Company</h5>
                                    <ul>                                        
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="how.html">How It Works</a></li>
                                        <li><a href="about.html">Our Company</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
                        <div class="widget">
                            <h5 class="id-color-2">Call for your no-risk cash offer:</h5>
                            <h2 class="jarallax mb0 wow fadeInUp" data-wow-delay=".2s"><i class="icofont-phone-circle id-color-2"></i> (503) 719-0515</h2>

                            <div class="spacer-20"></div>

                            <div class="fw-bold text-white"><i class="icofont-envelope me-2 id-color-2"></i>Send a Message</div>
                            contact@newpathhomebuyers.com                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="subfooter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="de-flex">
                                <div class="de-flex-col">
                                    Copyright 2025 - New Path Home Buyers
                                </div>
                                <ul class="menu-simple">
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- VBOUT Tracking Code -->
            <script type="text/javascript">
                /* embed code starts */
                var _vbset = _vbset || [];
                _vbset.push(['_account', 'VBT-16704-14864']);
                _vbset.push(['_domain', 'https://www.newpathhomebuyers.com']);

                (function() {
                    var vbt = document.createElement('script'); vbt.type = 'text/javascript'; vbt.async = true; 
                    vbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account='+_vbset[0][1]+'&_domain='+_vbset[1][1];var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vbt, s);
                })();
                /* embed code ends */
            </script>
            <!-- End VBOUT Tracking Code -->
        </footer>
        <!-- footer close -->
        `;
    }
}
customElements.define('my-footer', MyFooter);
