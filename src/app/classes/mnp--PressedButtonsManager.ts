class PressedButtonManager
{
    //#region properties and fields
    private _observedObject: HTMLElement;
    private _observedKeyboardKeys: {
        [key: number]: boolean
    };
    private _observedMouseKeys: {
        [key: number]: boolean
    }
    //#endregion properties and fields

    constructor(observedObject: HTMLElement)
    {
        this._observedObject = observedObject;

        this._keyboardButtonDowned = this._keyboardButtonDowned.bind(this);
        this._keyboardButtonUpped = this._keyboardButtonUpped.bind(this);
        this._mouseButtonDowned = this._mouseButtonDowned.bind(this);
        this._mouseButtonUpped = this._mouseButtonUpped.bind(this);
    }

    //#region event handlers
    private _keyboardButtonDowned(event: KeyboardEvent)
    {
        if(event.keyCode in this._observedKeyboardKeys)
        {
            this._observedKeyboardKeys[event.keyCode]=true;
        }
    }
    
    private _keyboardButtonUpped(event: KeyboardEvent)
    {
        if(event.keyCode in this._observedKeyboardKeys)
        {
            this._observedKeyboardKeys[event.keyCode]=false;
        }
    }

    private _mouseButtonDowned(event: MouseEvent)
    {
        if(event.button in this._observedMouseKeys)
        {
            this._observedMouseKeys[event.button]=true;
        }
    }

    private _mouseButtonUpped(event: MouseEvent)
    {
        if(event.button in this._observedMouseKeys)
        {
            this._observedMouseKeys[event.button]=false;
        }
    }
    //#endregion event handlers

    //#region keys actions
    public AddObservedKeyboardButton(buttonKey: number)
    {
        this._observedKeyboardKeys[buttonKey]=false;
    }

    public RemoveObservedKeyboardButton(buttonKey: number)
    {
        delete this._observedKeyboardKeys[buttonKey];
    }

    public AddObservedMouseButton(buttonKey: number)
    {
        this._observedMouseKeys[buttonKey]=false;
    }

    public RemoveObservedMouseButton(buttonKey: number)
    {
        delete this._observedMouseKeys[buttonKey];
    }
    //#endregion keys actions

    //#region observing actions
    public DisableKeyboardObserving()
    {
        this._observedObject.removeEventListener("keydown",this._keyboardButtonDowned);
        this._observedObject.removeEventListener("keyup",this._keyboardButtonUpped);
    }

    public EnableKeyboardObserving()
    {
        this._observedObject.addEventListener("keydown",this._keyboardButtonDowned);
        this._observedObject.addEventListener("keyup",this._keyboardButtonUpped);
        for(let key in this._observedKeyboardKeys)
        {
            this._observedKeyboardKeys[key] = false;
        }
    }

    public DisableMouseObserving()
    {
        this._observedObject.removeEventListener("mousedown",this._mouseButtonDowned);
        this._observedObject.removeEventListener("mouseup",this._mouseButtonUpped);
    }

    public EnableMouseObserving()
    {
        this._observedObject.addEventListener("mousedown",this._mouseButtonDowned);
        this._observedObject.addEventListener("mouseup",this._mouseButtonUpped);
        for(let key in this._observedMouseKeys)
        {
            this._observedMouseKeys[key] = false;
        }
    }
    //#endregion observing actions

    public IsKeyboardButtonPressed(buttonKey: number): boolean
    {
        return this._observedKeyboardKeys[buttonKey];
    }

    public IsMouseButtonPresed(buttonKey: number): boolean
    {
        return this._observedMouseKeys[buttonKey];
    }
}
