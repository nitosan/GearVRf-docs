<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>

<style>
/* Tooltip container */
.tooltip {
    position: relative;
    display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
 
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
    bottom: 110%;
    left: 50%; 
    margin-left: -100px; /* Use half of the width (120/2 = 60), to center the tooltip */
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}

.centered {
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align:center;
}

.intro_item {
    float: left;
    width: 20%;
}

/*Clear fix*/
.group:after {
  content: "";
  display: table;
  clear: both;
}

/*Sections*/
.section {
    width: 100%;
    height: 400px;
}

.section h1 {
    color: #ffffff;
    font-weight: bold;
}

.section_alt_color {
    background-color: #c0c0c0
}

.center_parent {
  position: relative;
}

.center_child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.background_brand {
    background:url('images/gear-vr_phoneplus_new_vr_img.png');
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}

.background_cta {
    background:url('images/gear_vr_cta.png');
    background-repeat: no-repeat;
    background-position: left;
    background-color: #c0c0c0;
    position: relative;   
}

.layer {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.btn_red {
    display:inline-block;
    text-decoration:none;
    background-color:#f9443e;
    color:white;
    cursor:pointer;
    font-family:Helvetica,Arial,sans-serif;
    font-size:20px;
    line-height:50px;
    text-align:center;
    margin:0;
    height:50px;
    padding:0px 33px;
    border-radius:15px;
    max-width:100%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-weight:bold;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
}

.btn_blue {
    display:inline-block;
    text-decoration:none;
    background-color:#267DDD;
    color:white;
    cursor:pointer;
    font-family:Helvetica,Arial,sans-serif;
    font-size:20px;
    line-height:50px;
    text-align:center;
    margin:0;
    height:50px;
    padding:0px 33px;
    border-radius:15px;
    max-width:100%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-weight:bold;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
}

</style>

<div class="section center_parent">
    <img class="center_child" src="images/GearVRf_Logo_Blue_Text_Inline.png">
</div>

<div class="section section_alt_color center_parent background_brand">
    <div class="layer">
        <h1 class="center_child">POWERFUL VR SDK <br>FOR MOBILE</h1>
    </div>
</div>

<div class="section center_parent">
    <div class="center_child group" style="width: 100%">
        <div class="intro_item centered">
            <h4>Simple</h4>
            <i class="fas fa-5x fa-child"></i>
            <br><br>
            <span>A simple SDK allow you to prototype rapidly with Android Studio</span>
        </div>
        <div class="intro_item centered">
            <h4>Powerful</h4>
            <i class="fas fa-5x fa-shipping-fast"></i>
            <br><br>
            <span>VR-specific rendering optimizations with access to low-level graphics pipeline</span>
        </div>
        <div class="intro_item centered">
            <h4>Mobile Performance</h4>
            <i class="fab fa-5x fa-android"></i>
            <br><br>
            <span>Built with focus on mobile performance</span>
        </div>
        <div class="intro_item centered">
            <h4>Open Source</h4>
            <i class="fab fa-5x fa-github"></i>
            <br><br>
            <span>No licensing fees or royalties ever</span>
        </div>
        <div class="intro_item centered">
            <h4>Cross Platform</h4>
            <i class="fas fa-5x fa-cogs"></i>
            <br><br>
            <span>Write code once and build for both Gear VR and Daydream</span>
        </div>
    </div>
</div>

<div class="section section_alt_color background_cta center_parent">

    <div class="center_child">
        <a class="typeform-share button btn_red"  style="color: white;" href="getting_started">
            Getting Started
        </a>

        <a class="typeform-share button btn_blue" style="color: white;" href="https://nitosan.typeform.com/to/fw9Ylx" data-mode="popup" style="" target="_blank">
            Leave Feedback
        </a>
    </div>

    <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() 
    </script>
</div>
