function PCFilter(fragmentSource)
{
    PIXI.AbstractFilter.call(this,
        // vertex shader
        null,
        // fragment shader
        fragmentSource,
        // set the uniforms
        {
            uTimeElapsed : {type : '1f', value : 0}
            , uResolution : {type : '2f', value: [0, 0]}

            , uParameter1 : {type: "1f", value: 0}
            , uParameter2 : {type: "1f", value: 0}
            , uParameter3 : {type: "1f", value: 0}

            , uParameterCount : {type: "1i", value: 3}
        }
    );
}

PCFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
PCFilter.prototype.constructor = PCFilter;