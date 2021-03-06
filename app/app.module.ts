import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule} from '@angular/forms';
//登录
import { LoginPage } from '../pages/login/login';
import { ChangeWordPage } from '../pages/login/change-word/change-word';

import { OrderPage } from '../pages/order/order';
import { OrdermapPage } from '../pages/ordermap/ordermap';
import { MePage } from '../pages/me/me';
import { TabsPage } from '../pages/tabs/tabs';
//首页
import { HomePage } from '../pages/home/home';
import { DayincomePage } from '../pages/home/dayincome/dayincome';
import { IncomedetailPage } from '../pages/home/incomedetail/incomedetail';
import { RanklistPage } from '../pages/home/ranklist/ranklist';
//订单
import { OrderdetailPage } from '../pages/order/orderdetail/orderdetail';
import { OrderacceptPage } from '../pages/order/orderaccept/orderaccept';
import { OrdertransferPage } from '../pages/order/ordertransfer/ordertransfer';
import { UserCommentPage } from '../pages/user-comment/user-comment';
//配件商城
import { PartsMallPage } from '../pages/parts-mall/parts-mall';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//个人信息
import { PeopleInformationPage } from '../pages/me-people-information/people-information';
import { TwocodePage } from '../pages/me/twocode/twocode';
//消息通知
import { MessageNoticePage } from '../pages/me-message-notice/message-notice';
import { PerformancePage } from '../pages/me-performance/performance';
import { TeachersPage } from '../pages/me/me-teachers/teachers';
import {TelUpdatePage} from "../pages/me-people-information/tel-update/tel-update";

import { DdChaoshiPage} from '../pages/dd-chaoshi/dd-chaoshi';
import {ComponentsModule} from '../components/components.module';
import {ShopChoosePage} from "../pages/me/shop-choose/shop-choose";
import {ReceiveRecordPage} from "../pages/me-receive-record/receive-record";
import { MeAllStudentsPage } from '../pages/me/me-all-students/me-all-students';


//import { QRCodeModule } from 'angular2-qrcode';//生成二维码
import { QRCodeModule } from 'angularx-qrcode';
import {MessageServiceProvider} from "../providers/messageService/messageService";
import { HttpModule }from '@angular/http';
import {OrderDetailsPage} from "../pages/me/order-details/order-details";

//网络
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { InterceptorServiceProvider } from '../providers/interceptor-service/interceptor-service';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import {ShoppingCarPage} from "../pages/me/shopping-car/shopping-car";
import { ShoppingCartPage } from '../pages/parts-mall/shopping-cart/shopping-cart';//选取配件 购物车
import {PartsStreamPage} from "../pages/me/parts-stream/parts-stream";
import {ApplyPartsPage} from "../pages/me/apply-parts/apply-parts";
import {MyPartsPage} from "../pages/me/my-parts/my-parts";
import { ErrorInfoProvider } from '../providers/error-info/error-info';
import { AppConfig} from "./app.config";
import {PartsStockPage} from "../pages/me/parts-stock/parts-stock";
import {ApplyPartsTwoPage} from "../pages/me/apply-parts-two/apply-parts-two";
import { PageDataProvider } from '../providers/page-data/page-data';

//网络检查
import { Network }  from '@ionic-native/network';
//拔打电话
import { CallNumber } from '@ionic-native/call-number';
//设备
import { Device } from '@ionic-native/device';
//app检查
import { AppAvailability } from '@ionic-native/app-availability';
//定位
import { Geolocation } from '@ionic-native/geolocation';
//极光推送
import { JPushService } from 'ionic2-jpush/dist'
import { PushEventsProvider } from '../providers/push-events/push-events';
import { BackButtonProvider } from '../providers/back-button/back-button';
@NgModule({
  declarations: [
    MyApp,
    MePage,
    OrdermapPage,
    OrderPage,
    HomePage,
    TabsPage,
    DayincomePage,
    RanklistPage,
    IncomedetailPage,
    PeopleInformationPage,
    MessageNoticePage,
    PerformancePage,
    TeachersPage,
    OrderdetailPage,
    OrderacceptPage,
    TelUpdatePage,
    DdChaoshiPage,
    OrdertransferPage,
    ShopChoosePage,
    ReceiveRecordPage,
    MeAllStudentsPage,
    PartsMallPage,
    ReceiveRecordPage,
    TwocodePage,
    OrderDetailsPage,
    LoginPage,
    ChangeWordPage,
    ShoppingCarPage,
    PartsStreamPage,
    ApplyPartsPage,
    ApplyPartsPage,
    MyPartsPage,
    PartsStockPage,
    ApplyPartsTwoPage,
    ShoppingCartPage,
    UserCommentPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    FormsModule,
    QRCodeModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
    	iconMode: 'ios',
    	mode: 'ios',  //平台样式
    	backButtonText: '',//按钮内容
      backButtonIcon: 'myback',//按钮图标样式
      tabsHideOnSubPages: 'true' , //隐藏全部子页面tabs
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MePage,
    OrdermapPage,
    OrderPage,
    HomePage,
    TabsPage,
    DayincomePage,
    RanklistPage,
    IncomedetailPage,
    PeopleInformationPage,
    MessageNoticePage,
    PerformancePage,
    TeachersPage,
    OrderdetailPage,
    OrderacceptPage,
    TelUpdatePage,
    DdChaoshiPage,
    OrdertransferPage,
    ShopChoosePage,
    ReceiveRecordPage,
    MeAllStudentsPage,
    PartsMallPage,
    ReceiveRecordPage,
    TwocodePage,
    OrderDetailsPage,
    LoginPage,
    ChangeWordPage,
    ShoppingCarPage,
    PartsStreamPage,
    ApplyPartsPage,
    ApplyPartsPage,
    MyPartsPage,
    PartsStockPage,
    ApplyPartsTwoPage,
    ShoppingCartPage,
    UserCommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageServiceProvider,
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorServiceProvider,multi:true},
    StorageServiceProvider,
    HttpServiceProvider,
    ErrorInfoProvider,
    AppConfig,
    PageDataProvider,
    Network,
    CallNumber,
    Device,
    Geolocation,
    AppAvailability,
    JPushService,
    PushEventsProvider,
    BackButtonProvider
  ]
})
export class AppModule {}
