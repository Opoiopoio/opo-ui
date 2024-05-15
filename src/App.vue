<script setup lang="ts">
import { OpoField, OpoForm } from '@/components'
import * as yup from 'yup'
import localization from '@/localization'
import './style.scss'

const loginLabel = 'Логин'
const loginName = 'login'

const passwordLabel = 'Пароль'
const passwordName = 'password'

const validationSchema = yup.object({
  [loginName]: yup
    .string()
    .required(localization.required(loginLabel))
    .min(5, localization.min(loginLabel, [5])),
  [passwordName]: yup
    .string()
    .required(localization.required(passwordLabel))
    .min(8, localization.min(passwordLabel, [8])),
})
</script>

<template>
  <OpoForm :validation-schema="validationSchema" label-nesting="inner">
    <OpoField :name="loginName" label-type="top" :label="loginLabel" />
    <OpoField :name="loginName" label-type="top-left" :label="loginLabel" />
    <OpoField :name="loginName" label-type="top-right" :label="loginLabel" />
    <OpoField :name="loginName" label-type="bottom" :label="loginLabel" />
    <OpoField :name="loginName" label-type="bottom-left" :label="loginLabel" />
    <OpoField :name="loginName" label-type="bottom-right" :label="loginLabel" />
    <OpoField :name="loginName" label-type="left" :label="loginLabel" />
    <OpoField :name="loginName" label-type="right" :label="loginLabel" />
    <OpoField :name="loginName" label-type="hidden" :label="loginLabel" />
    <OpoField :name="passwordName" :label="passwordLabel" error-message-type="fatal" />
  </OpoForm>
</template>

<style>
body {
  background-color: #676767;
}
</style>
