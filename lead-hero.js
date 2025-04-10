class LeadHero extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div id="vboutEmbedFormWrapper-157663">
                <h4 style="margin-bottom: 0px; margin-left: 10px;">Get Your Cash Offer Now!</h4>
                <form action="https://www.vbt.io/embedcode/submit/157663/?_format=page" target="_blank"  id="vboutEmbedForm-157663" name="vboutEmbedForm-157663" data-vboutform="157663" class="" method="post" enctype="multipart/form-data">
                    <div id="vboutEmbedFormResponse-157663" style="display: none;"></div>
                    <fieldset>
                        <div class="vbf-step">
                            <div class="vboutEmbedFormRow">
                                <div class="vboutEmbedFormField"><input type="text" name="vbout_EmbedForm[field][1015157]" id="custom-1015157" value="" class="vfb-text   " data-error="" placeholder="Full Name"  /></div>
                            </div>
                            <div class="vboutEmbedFormRow">
                                <div class="vboutEmbedFormField"><input type="email" name="vbout_EmbedForm[field][1015159]" id="custom-1015159" value="" class="vfb-text  required  validate-email " data-error="" placeholder="Email*"  /></div>
                            </div>
                            <div class="vboutEmbedFormRow">
                                <div class="vboutEmbedFormField"><input type="tel" name="vbout_EmbedForm[field][1015160]" id="custom-1015160" value="" class="vfb-text   validate-phone " data-error="" placeholder="Phone"  data-countrylist="yes" /></div>
                            </div>
                            <div class="vboutEmbedFormRow">
                                <div class="vboutEmbedFormField"><input type="text" name="vbout_EmbedForm[field][1015162]" id="custom-1015162" value="" class="vfb-text   " data-error="" placeholder="Full Address"  /></div>
                            </div>
                        </div>
                        <div class="vboutEmbedFormRow vfb-submit">
                            <button type="submit" class="vbf-submit">Get Your Cash Offer!</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        `;
    }
}
customElements.define('lead-hero', LeadHero);
