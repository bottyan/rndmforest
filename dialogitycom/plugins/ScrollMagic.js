/**
 * How to use:
 * 
 * This snippet will make the variable $scrollmagic 
 * available in every component/page. 
 * 
 * You can call this.$scrollmagic to use it. 
 * For example: 
 * const controller = new this.$scrollmagic.Controller();
 */

import Vue from 'vue';
import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
Object.defineProperty(Vue.prototype, '$scrollmagic', { value: ScrollMagic });