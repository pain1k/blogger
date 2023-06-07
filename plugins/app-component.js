import Vue from 'vue'

import Message from '@/components/UI/Message'
import AppButton from '@/components/UI/Controls/Button'
import AppInput from '@/components/UI/Controls/Input'
import AppTextarea from '@/components/UI/Controls/Textarea'
import Intro from "@/components/UI/Intro";
import PostsList from "@/components/blog/PostsList";

Vue.component('AppButton',AppButton)
Vue.component('AppInput',AppInput)
Vue.component('AppTextarea',AppTextarea)
Vue.component('Message',Message)
Vue.component('Intro',Intro)
Vue.component('PostsList',PostsList)
