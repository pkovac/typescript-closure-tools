/// <reference path="../../../globals.d.ts" />
/// <reference path="./button.d.ts" />
/// <reference path="./menu.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./menurenderer.d.ts" />
/// <reference path="../events/browserevent.d.ts" />
/// <reference path="../events/event.d.ts" />
/// <reference path="../positioning/anchoredposition.d.ts" />
/// <reference path="../math/box.d.ts" />
/// <reference path="./menuitem.d.ts" />
/// <reference path="./menuseparator.d.ts" />
/// <reference path="./control.d.ts" />

declare module goog.ui {

    class MenuButton extends MenuButton__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MenuButton__Class extends goog.ui.Button__Class  { 
    
            /**
             * A menu button control.  Extends {@link goog.ui.Button} by composing a button
             * with a dropdown arrow and a popup menu.
             *
             * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
             *     structure to display as the button's caption (if any).
             * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
             *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
             *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
             * @constructor
             * @extends {goog.ui.Button}
             */
            constructor(opt_content?: string, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper, opt_menuRenderer?: goog.ui.MenuRenderer);
            /**
             * A menu button control.  Extends {@link goog.ui.Button} by composing a button
             * with a dropdown arrow and a popup menu.
             *
             * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
             *     structure to display as the button's caption (if any).
             * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
             *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
             *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
             * @constructor
             * @extends {goog.ui.Button}
             */
            constructor(opt_content?: Node, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper, opt_menuRenderer?: goog.ui.MenuRenderer);
            /**
             * A menu button control.  Extends {@link goog.ui.Button} by composing a button
             * with a dropdown arrow and a popup menu.
             *
             * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
             *     structure to display as the button's caption (if any).
             * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
             *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
             *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
             * @constructor
             * @extends {goog.ui.Button}
             */
            constructor(opt_content?: Node[], opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper, opt_menuRenderer?: goog.ui.MenuRenderer);
            /**
             * A menu button control.  Extends {@link goog.ui.Button} by composing a button
             * with a dropdown arrow and a popup menu.
             *
             * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
             *     structure to display as the button's caption (if any).
             * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
             *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
             *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
             * @constructor
             * @extends {goog.ui.Button}
             */
            constructor(opt_content?: NodeList, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper, opt_menuRenderer?: goog.ui.MenuRenderer);
    
            /**
             * Handles mousedown events over the document.  If the mousedown happens over
             * an element unrelated to the component, hides the menu.
             * TODO(attila): Reconcile this with goog.ui.Popup (and handle frames/windows).
             * @param {goog.events.BrowserEvent} e Mouse event to handle.
             * @protected
             */
            handleDocumentMouseDown(e: goog.events.BrowserEvent): void;
    
            /**
             * Returns true if the given element is to be considered part of the component,
             * even if it isn't a DOM descendant of the component's root element.
             * @param {Element} element Element to test (if any).
             * @return {boolean} Whether the element is considered part of the component.
             * @protected
             */
            containsElement(element: Element): boolean;
    
            /**
             * Handles {@code ACTION} events dispatched by an activated menu item.
             * @param {goog.events.Event} e Action event to handle.
             * @protected
             */
            handleMenuAction(e: goog.events.Event): void;
    
            /**
             * Handles {@code BLUR} events dispatched by the popup menu by closing it.
             * Only registered if the menu is focusable.
             * @param {goog.events.Event} e Blur event dispatched by a focusable menu.
             */
            handleMenuBlur(e: goog.events.Event): void;
    
            /**
             * Returns the menu attached to the button.  If no menu is attached, creates a
             * new empty menu.
             * @return {goog.ui.Menu} Popup menu attached to the menu button.
             */
            getMenu(): goog.ui.Menu;
    
            /**
             * Replaces the menu attached to the button with the argument, and returns the
             * previous menu (if any).
             * @param {goog.ui.Menu?} menu New menu to be attached to the menu button (null
             *     to remove the menu).
             * @return {goog.ui.Menu|undefined} Previous menu (undefined if none).
             */
            setMenu(menu: goog.ui.Menu): any /*goog.ui.Menu|any (undefined)*/;
    
            /**
             * Specify which positioning algorithm to use.
             *
             * This method is preferred over the fine-grained positioning methods like
             * setPositionElement, setAlignMenuToStart, and setScrollOnOverflow. Calling
             * this method will override settings by those methods.
             *
             * @param {goog.positioning.AnchoredPosition} position The position of the
             *     Menu the button. If the position has a null anchor, we will use the
             *     menubutton element as the anchor.
             */
            setMenuPosition(position: goog.positioning.AnchoredPosition): void;
    
            /**
             * Sets an element for anchoring the menu.
             * @param {Element} positionElement New element to use for
             *     positioning the dropdown menu.  Null to use the default behavior
             *     of positioning to this menu button.
             */
            setPositionElement(positionElement: Element): void;
    
            /**
             * Sets a margin that will be applied to the menu's position when it is shown.
             * If null, no margin will be applied.
             * @param {goog.math.Box} margin Margin to apply.
             */
            setMenuMargin(margin: goog.math.Box): void;
        
            /**
             * Adds a new menu item at the end of the menu.
             * @param {goog.ui.MenuItem|goog.ui.MenuSeparator|goog.ui.Control} item Menu
             *     item to add to the menu.
             */
            addItem(item: goog.ui.MenuItem): void;
            /**
             * Adds a new menu item at the end of the menu.
             * @param {goog.ui.MenuItem|goog.ui.MenuSeparator|goog.ui.Control} item Menu
             *     item to add to the menu.
             */
            addItem(item: goog.ui.MenuSeparator): void;
    
            /**
             * Adds a new menu item at the specific index in the menu.
             * @param {goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu item to add to the
             *     menu.
             * @param {number} index Index at which to insert the menu item.
             */
            addItemAt(item: goog.ui.MenuItem, index: number): void;
            /**
             * Adds a new menu item at the specific index in the menu.
             * @param {goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu item to add to the
             *     menu.
             * @param {number} index Index at which to insert the menu item.
             */
            addItemAt(item: goog.ui.MenuSeparator, index: number): void;
    
            /**
             * Removes the item from the menu and disposes of it.
             * @param {goog.ui.MenuItem|goog.ui.MenuSeparator} item The menu item to remove.
             */
            removeItem(item: goog.ui.MenuItem): void;
            /**
             * Removes the item from the menu and disposes of it.
             * @param {goog.ui.MenuItem|goog.ui.MenuSeparator} item The menu item to remove.
             */
            removeItem(item: goog.ui.MenuSeparator): void;
    
            /**
             * Removes the menu item at a given index in the menu and disposes of it.
             * @param {number} index Index of item.
             */
            removeItemAt(index: number): void;
    
            /**
             * Returns the menu item at a given index.
             * @param {number} index Index of menu item.
             * @return {goog.ui.MenuItem?} Menu item (null if not found).
             */
            getItemAt(index: number): goog.ui.MenuItem;
    
            /**
             * Returns the number of items in the menu (including separators).
             * @return {number} The number of items in the menu.
             */
            getItemCount(): number;
    
            /**
             * @return {boolean} Whether the menu is aligned to the start of the button
             *     (left if the render direction is left-to-right, right if the render
             *     direction is right-to-left).
             */
            isAlignMenuToStart(): boolean;
    
            /**
             * Sets whether the menu is aligned to the start or the end of the button.
             * @param {boolean} alignToStart Whether the menu is to be aligned to the start
             *     of the button (left if the render direction is left-to-right, right if
             *     the render direction is right-to-left).
             */
            setAlignMenuToStart(alignToStart: boolean): void;
    
            /**
             * Sets whether the menu should scroll when it's too big to fix vertically on
             * the screen.  The css of the menu element should have overflow set to auto.
             * Note: Adding or removing items while the menu is open will not work correctly
             * if scrollOnOverflow is on.
             * @param {boolean} scrollOnOverflow Whether the menu should scroll when too big
             *     to fit on the screen.  If false, adjust logic will be used to try and
             *     reposition the menu to fit.
             */
            setScrollOnOverflow(scrollOnOverflow: boolean): void;
    
            /**
             * @return {boolean} Wether the menu will scroll when it's to big to fit
             *     vertically on the screen.
             */
            isScrollOnOverflow(): boolean;
    
            /**
             * @return {boolean} Whether the attached menu is focusable.
             */
            isFocusablePopupMenu(): boolean;
    
            /**
             * Sets whether the attached popup menu is focusable.  If the popup menu is
             * focusable, it may steal keyboard focus from the menu button, so the button
             * will not hide the menu on blur.
             * @param {boolean} focusable Whether the attached menu is focusable.
             */
            setFocusablePopupMenu(focusable: boolean): void;
    
            /**
             * Sets whether to render the menu as a sibling element of the button.
             * Normally, the menu is a child of document.body.  This option is useful if
             * you need the menu to inherit styles from a common parent element, or if you
             * otherwise need it to share a parent element for desired event handling.  One
             * example of the latter is if the parent is in a goog.ui.Popup, to ensure that
             * clicks on the menu are considered being within the popup.
             * @param {boolean} renderMenuAsSibling Whether we render the menu at the end
             *     of the dom or as a sibling to the button/label that renders the drop
             *     down.
             */
            setRenderMenuAsSibling(renderMenuAsSibling: boolean): void;
    
            /**
             * Reveals the menu and hooks up menu-specific event handling.
             * @deprecated Use {@link #setOpen} instead.
             */
            showMenu(): void;
    
            /**
             * Hides the menu and cleans up menu-specific event handling.
             * @deprecated Use {@link #setOpen} instead.
             */
            hideMenu(): void;
    
            /**
             * Resets the MenuButton's size.  This is useful for cases where items are added
             * or removed from the menu and scrollOnOverflow is on.  In those cases the
             * menu will not behave correctly and resize itself unless this is called
             * (usually followed by positionMenu()).
             */
            invalidateMenuSize(): void;
    
            /**
             * Positions the menu under the button.  May be called directly in cases when
             * the menu size is known to change.
             */
            positionMenu(): void;
    
            /**
             * Handles {@code HIGHLIGHT} events dispatched by the attached menu.
             * @param {goog.events.Event} e Highlight event to handle.
             */
            handleHighlightItem(e: goog.events.Event): void;
    
            /**
             * Handles UNHIGHLIGHT events dispatched by the associated menu.
             * @param {goog.events.Event} e Unhighlight event to handle.
             */
            handleUnHighlightItem(e: goog.events.Event): void;
    } 
    
}
