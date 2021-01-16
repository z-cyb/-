<template>
    <div class="index-div" id="index-div">
<!--        轮播图-->
        <div class="swiper-container">
            <div class="parallax-bg"  data-swiper-parallax="-23%"></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="title" data-swiper-parallax="-300">廾匸</div>
                    <div class="subtitle" data-swiper-parallax="-200">廾匸</div>
                    <div class="text" data-swiper-parallax="-100">
                        <p>gong xi（恭喜）。译为“掩藏”。对喜欢的人的爱掩藏起来。比如当喜欢的人有了新的对象时，用此词来恭喜对方，意思就是我祝福你幸福，但我把你对你的喜欢埋藏在心里。</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="title" data-swiper-parallax="-300" data-swiper-parallax-opacity="0">匸㕕</div>
                    <div class="subtitle" data-swiper-parallax="-200">匸㕕</div>
                    <div class="text" data-swiper-parallax="-100">
                        <p>意为掩藏 亡字不见首厶厶而㕕 我喜欢你没了半条命，而你厶欲而㕕.</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="title" data-swiper-parallax="-300">卍</div>
                    <div class="subtitle" data-swiper-parallax="-200">卍</div>
                    <div class="text" data-swiper-parallax="-100">
                        <p>卍是一个符号，是佛教相传吉祥的标帜，来自梵文，意为吉祥万德之所集。藏语叫做雍仲。武则天为其定音为wàn。在佛教中是佛祖的心印。
                            据《华严音义》记载：“卍字，本非是字，大周长寿二年（693年）主上权制此文，著于天枢（大周万国颂德天枢），音之为万，谓吉祥万德之所集也。 ”.</p>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div>
            <el-divider><span style="font-size: 1.875rem">Cc</span></el-divider>
        </div>
        <div style="width: 100%; margin-top: 5rem; border: 1px solid red;">
            <div class="wrap">
                <!--部署内外层图片-->
                <div class="cube">
                    <!--前面图片 -->
                    <div class="out_front">
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3387691909,83147654&fm=11&gp=0.jpg" class="pic" alt="Cc">
                    </div>
                    <!--后面图片 -->
                    <div class="out_back">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3675547813,1268056532&fm=26&gp=0.jpg" class="pic" alt="Cc">
                    </div>
                    <!--左面图片 -->
                    <div class="out_left">
                        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h481%2F20180226%2F607c-fyrwsqi3385286.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613374543&t=86a7ce01d732b37c233d96d690326b69" class="pic">
                    </div>
                    <!--右面图片 -->
                    <div class="out_right">
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4129015048,3437076051&fm=26&gp=0.jpg" class="pic" alt="Cc">
                    </div>
                    <!--上面图片 -->
                    <div class="out_top">
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1267215091,1030602818&fm=26&gp=0.jpg" class="pic" alt="Cc">
                    </div>
                    <!--下面图片 -->
                    <div class="out_bottom">
                        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F006YsS1Dly1gktm6lwswfj30u00vo0wd.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613375017&t=a0c878aa7382935137f01cb8285affe5" class="pic" alt="Cc">
                    </div>

                    <!--小正方体 -->
                    <span class="in_front">
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4001369976,3201058252&fm=11&gp=0.jpg" class="in_pic" alt="Cc">
            </span>
                    <span class="in_back">
                 <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2913941552,4215137312&fm=26&gp=0.jpg" class="in_pic" alt="Cc">
            </span>
                    <span class="in_left">
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=414859022,1892274622&fm=26&gp=0.jpg" class="in_pic" alt="Cc">
            </span>
                    <span class="in_right">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=158230476,3053926077&fm=15&gp=0.jpg" class="in_pic" alt="Cc">
            </span>
                    <span class="in_top">
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1432685252,3356679726&fm=15&gp=0.jpg" class="in_pic" alt="Cc">
            </span>
                    <span class="in_bottom">
                    <img src="https://www.cnblogs.com/images/cnblogs_com/php-linux/674292/o_7.jpg" class="in_pic" alt="Cc">
                </span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Swiper from 'swiper'
    import "swiper/dist/css/swiper.min.css";
    import {WOW} from 'wowjs'
    export default {
        name: "index",
        data(){
            return{
                on:false,
                currentDate: new Date()
            }
        },
        mounted() {
            new WOW().init();
             new Swiper('.swiper-container', {
                speed: 600,
                parallax: true,
                pagination: {
                    el: '.swiper-pagination',
                    // bulletClass : 'my-bullet',
                    clickable: true,
                    bulletActiveClass: 'my-bullet-active',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },
        created() {
            // this.$store.commit('edit',{age:15,sex:'男'});
            this.$store.dispatch('aEdit',{age:15,sex:'男'})
            console.log(this.$store.state.num)
            this.$store.commit('a')
            console.log(this.$store.getters.fullInfo)
        },
        watch: {
            cases() {
                this.$nextTick(() => { // 不加这块也能实现效果，不知道是什么用处
                    var wow = new WOW({
                        live: false
                    })
                    wow.init()
                })
            }
        }
    }
</script>

<style scoped>
.index-div{
    width: 100%;
    height:31.25rem;
    /*border: 1px solid red;*/
}
/*轮播图*/
.swiper-container {
    width: 100%;
    height: 100%;
    background: #000;
}

.swiper-slide {
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
}

.parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-image: url("../assets/images/1.jpeg");
}

.swiper-slide .title {
    font-size: 2.5rem;
    font-weight: 300;
}

.swiper-slide .subtitle {
    font-size: 1.25rem;
}

.swiper-slide .text {
    font-size: 0.875rem;
    max-width: 25rem;
    line-height: 1.3;
}
    /*分页器*/
.index-div >>>.my-bullet-active{
    background-color: red;
    opacity: 1;
}
    /*内容*/
.content-el-row{
    height: 50%;
}
    .content-div{
        height: 100%;
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /*卡片*/

/*最外层容器样式*/
.wrap {
    width: 6.25rem;
    height: 6.25rem;
    /*margin: 150px;*/
    position: relative;
    /*border: 1px solid red;*/
    margin: 12.5rem  auto;

}

/*得到立方体效果*/
.cube {
    width:6.25rem;
    height: 6.25rem;
    margin: 0 auto;
    transform-style: preserve-3d;
    /*设置动画播放样式:动画对象 播放速度 时间 播放次数*/
    animation: rotate linear 20s infinite;
}

/*动画旋转的方式*/
/*得到动画效果*/
@-moz-keyframes rotate {                     /*firefox*/
    from {
        transform: rotateX(0deg) rotateY(0deg);
    }
    to {
        transform: rotateX(360deg) rotateY(360deg);
    }
}
@-webkit-keyframes rotate {                /*sofari chrome*/
    from {
        transform: rotateX(0deg) rotateY(0deg);
    }
    to {
        transform: rotateX(360deg) rotateY(360deg);
    }
}
@-o-keyframes rotate {                    /*opera*/
    from {
        transform: rotateX(0deg) rotateY(0deg);
    }
    to {
        transform: rotateX(180deg) rotateY(180deg);
    }
}
/*每张图片的样式*/
.cube div {
    position: absolute;
    width: 18.75rem;
    height: 18.75rem;
    /*opacity: 0.8;*/
    /*过渡效果*/
    transition: all .4s;
}

/*定义所有图片样式*/
.pic {
    width: 18.75rem;
    height: 18.75rem;
}

.cube .out_front {
    transform: rotateY(0deg) translateZ(9.375rem);
}

.cube .out_back {
    transform: translateZ(9.375rem) rotateY(180deg);
}

.cube .out_left {
    transform: rotateY(-90deg) translateZ(9.375rem);
}

.cube .out_right {
    transform: rotateY(90deg) translateZ(9.375rem);
}

.cube .out_top {
    transform: rotateX(90deg) translateZ(9.375rem);
}

.cube .out_bottom {
    transform: rotateX(-90deg) translateZ(9.375rem);
}

/*定义小正方体样式*/
.cube span {
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50px;
    left: 50px;
    bottom: 300px;
}

.cube .in_pic {
    width: 100px;
    height: 100px;
}

.cube .in_front {
    transform: rotateY(0deg) translateZ(50px);
}

.cube .in_back {
    transform: translateZ(-50px) rotateY(180deg);
}

.cube .in_left {
    transform: rotateY(-90deg) translateZ(50px);
}

.cube .in_right {
    transform: rotateY(90deg) translateZ(50px);
}

.cube .in_top {
    transform: rotateX(90deg) translateZ(50px);
}

.cube .in_bottom {
    transform: rotateX(-90deg) translateZ(50px);
}

/*鼠标移入后样式*/
.cube:hover .out_front {
    transform: rotateY(0deg) translateZ(15.625rem);
}

.cube:hover .out_back {
    transform: translateZ(-15.625rem) rotateY(180deg);
}

.cube:hover .out_left {
    transform: rotateY(-90deg) translateZ(15.625rem);
}

.cube:hover .out_right {
    transform: rotateY(90deg) translateZ(15.625rem);
}

.cube:hover .out_top {
    transform: rotateX(90deg) translateZ(15.625rem);
}

.cube:hover .out_bottom {
    transform: rotateX(-90deg) translateZ(15.625rem);
}
</style>
