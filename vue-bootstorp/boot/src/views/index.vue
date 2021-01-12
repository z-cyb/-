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
        <el-row class="content-el-row">
            <el-col :sm="6" :md="6" :lg="6" :xs="6" :xl="6" :offset="6" class="content-div wow animate__animated animate__bounceInLeft">
                暂定
            </el-col>
            <el-col :sm="6" :md="6" :lg="6" :xs="6" :xl="6" class="content-div wow animate__animated animate__bounceInRight">
                暂定
            </el-col>
        </el-row>
        <el-row class="content-el-row">
            <el-col :sm="6" :md="6" :lg="6" :xs="6" :xl="6" :offset="6" class="content-div wow animate__animated animate__bounceInLeft">
                暂定
            </el-col>
            <el-col :sm="6" :md="6" :lg="6" :xs="6" :xl="6" class="content-div wow animate__animated animate__bounceInRight">
                暂定
            </el-col>
        </el-row>
        <foot></foot>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import "swiper/dist/css/swiper.min.css";
    import {WOW} from 'wowjs'
    import foot from "../components/footer"
    export default {
        name: "index",
        components:{
            foot
        },
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
</style>
