
from django.shortcuts import render, redirect
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .service.UserService import UserService
import json


@csrf_exempt
def user_signup(request):
    json_request = json.loads(request.body)
    res = {}
    service = UserService()
    service.add(json_request)
    res['message'] = 'User added successfully'
    return JsonResponse({"result": res})


@csrf_exempt
def user_signin(request):
    json_request = json.loads(request.body)
    loginId = json_request['loginId']
    password = json_request['password']
    res = {}
    service = UserService()
    userData = service.auth(loginId, password)
    if len(userData) != 0:
        res['data'] = userData[0]
    else:
        res['message'] = 'login & password invalid'
    return JsonResponse({"result": res})


@csrf_exempt
def save_user(request):
    json_request = json.loads(request.body)
    res = {}
    service = UserService()
    if int(json_request['id']) > 0:
        service.update(json_request)
        res['message'] = 'User Updated successfully'
    else:
        service.add(json_request)
        res['message'] = 'User added successfully'
    return JsonResponse({"result": res})


@csrf_exempt
def get_user(request, id=0):
    res = {}
    service = UserService()
    userData = service.get(id)
    res['data'] = userData[0]
    return JsonResponse({"result": res})


@csrf_exempt
def user_list(request, pageNo=0):
    json_request = json.loads(request.body)
    params = {}
    params['pageNo'] = pageNo
    params['pageSize'] = 5
    params['firstName'] = json_request['firstName']

    res = {}

    service = UserService()
    list = service.search(params)
    res['data'] = list
    return JsonResponse({"result": res})


@csrf_exempt
def delete_user(request, id=0):
    print('delete method => ')
    res = {}
    service = UserService()
    service.delete(id)
    res['message'] = 'Data Deleted Successfully...!!'
    return JsonResponse({"result": res})