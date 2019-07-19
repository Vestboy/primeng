import { ElementRef, AfterViewInit, OnDestroy, Renderer2, NgZone } from '@angular/core';
import { MenuItem } from '../common/menuitem';
import { Subscription } from 'rxjs';
import { InnerMessageService } from '../common/inner.message.service';
export declare class ContextMenuSub {
    contextMenu: ContextMenu;
    item: MenuItem;
    root: boolean;
    constructor(contextMenu: ContextMenu);
    activeItem: any;
    containerOffset: any;
    hideTimeout: any;
    onItemMouseEnter(event: any, item: any, menuitem: any): void;
    onItemMouseLeave(event: any, link: any): void;
    itemClick(event: any, item: MenuItem): void;
    listClick(event: any): void;
    position(sublist: any, item: any): void;
}
export declare class ContextMenu implements AfterViewInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    zone: NgZone;
    private messageService;
    model: MenuItem[];
    global: boolean;
    target: any;
    style: any;
    styleClass: string;
    appendTo: any;
    autoZIndex: boolean;
    baseZIndex: number;
    triggerEvent: string;
    containerViewChild: ElementRef;
    documentClickListener: any;
    documentScrollListener: any;
    windowResizeListener: any;
    triggerEventListener: any;
    subscription: Subscription;
    contextMenuOpennedMessage: string;
    constructor(el: ElementRef, renderer: Renderer2, zone: NgZone, messageService: InnerMessageService);
    ngAfterViewInit(): void;
    show(event?: MouseEvent): void;
    hide(): void;
    moveOnTop(): void;
    toggle(event?: MouseEvent): void;
    position(event?: MouseEvent): void;
    bindGlobalListeners(): void;
    unbindGlobalListeners(): void;
    onWindowResize(event: any): void;
    ngOnDestroy(): void;
    sendMessage(message: string): void;
    clearMessage(): void;
    onMessageReceived(message: string): void;
    keys: {
        37: number;
        38: number;
        39: number;
        40: number;
    };
    preventDefault(e: any): void;
    preventDefaultForScrollKeys(e: any): boolean;
    disableScroll(): void;
    enableScroll(): void;
}
export declare class ContextMenuModule {
}