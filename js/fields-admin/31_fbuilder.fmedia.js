	$.fbuilder.typeList.push(
		{
			id:"fMedia",
			name:"Media",
			control_category:1
		}
	);
	$.fbuilder.controls[ 'fMedia' ]=function(){};
	$.extend(
		$.fbuilder.controls[ 'fMedia' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			ftype:"fMedia",
            sMediaType:"image", // image, audio, video
            init : function()
				{
					this.data = {
							image:{
								sWidth:"",
								sHeight:"",
								sSrc:"",
								sAlt:"",
								sLink:"",
								sTarget:"",
								sFigcaption: ""
							},
							audio:{
								sWidth:"",
								sSrc:"",
								sSrcAlt:"",
								sControls:1,
								sLoop:0,
								sAutoplay:0,
								sMuted:0,
								sPreload: "auto",
								sFallback: "",
								sFigcaption: ""
							},
							video:{
								sWidth:"",
								sHeight:"",
								sSrc:"",
								sSrcAlt:"",
								sPoster:"",
								sControls:1,
								sLoop:0,
								sAutoplay:0,
								sMuted:0,
								sPreload: "auto",
								sFallback: "",
								sFigcaption: ""
							}
						};
				},
            _display_image: function()
                {
                    var d = this.data.image,
                        esc = $.fbuilder.htmlEncode,
                        a = [],
                        l = [],
                        r = '';
                        
                    if( $.trim( d.sWidth ) ) a.push( 'width="'+esc( d.sWidth )+'"' );
                    if( $.trim( d.sHeight ) ) a.push( 'height="'+esc( d.sHeight )+'"' );
                    if( $.trim( d.sSrc ) ) a.push( 'src="'+esc( d.sSrc )+'"' );
                    if( $.trim( d.sAlt ) ) a.push( 'alt="'+esc( d.sAlt )+'"' );
                    if( $.trim( d.sLink ) )
                    {
                        l.push( 'href="'+esc( d.sLink )+'"' );
                        if( $.trim( d.sTarget ) ) l.push( 'target="'+esc( d.sTarget )+'"' );
                        r = '<a '+l.join( ' ' )+' ><img '+a.join( ' ' )+' /></a>';
                    }
                    else
                    {
                        r = '<img '+a.join( ' ' )+' />';
                    }
                 
                    return r;
                },
            _display_audio_video: function( d, isV )
                {
                    var esc = $.fbuilder.htmlEncode,
                        a = [],
                        t = ( isV ) ? 'video' : 'audio' ;
                        
                    if( $.trim( d.sWidth ) ) a.push( 'width="'+esc( d.sWidth )+'"' );
                    if( isV && $.trim( d.sHeight ) ) a.push( 'height="'+esc( d.sHeight )+'"' );
                    if( isV && $.trim( d.sPoster ) ) a.push( 'poster="'+esc( d.sPoster )+'"' );
                    if( $.trim( d.sSrc ) ) a.push( 'src="'+esc( d.sSrc )+'"' );
                    if( d.sAutoplay ) a.push( 'autoplay' );
                    if( d.sControls ) a.push( 'controls' );
                    if( d.sLoop ) a.push( 'loop' );
                    if( d.sMuted ) a.push( 'muted' );
                    a.push( 'preload="'+esc( d.sPreload )+'"' );
                    
                    return '<'+t+' '+a.join( ' ' )+'>'+( ( $.trim( d.sSrcAlt ) ) ? '<source src="'+esc( d.sSrcAlt )+'" />' : '' )+'<p>'+d.sFallback+'</p></'+t+'>';
                },
            _display_audio: function()
                {
                    return this._display_audio_video( this.data.audio, false );
                },
            _display_video: function()
                {
                    return this._display_audio_video( this.data.video, true );
                },
            display:function()
				{
					return '<div class="fields fmark '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'" style><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this[ '_display_' + this.sMediaType ]()+'</label><span class="uh">'+this.data[ this.sMediaType ][ 'sFigcaption' ]+'</span><div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{ 	
                    var me = this;
                    $("#sMediaBtn").bind("click", function(e) 
						{
							me._loadMedia( 'sSrc', me.sMediaType );
						});
                    $("#sMediaAltBtn").bind("click", function(e) 
						{
							me._loadMedia( 'sSrcAlt', me.sMediaType );
						});
                    $("#sPosterBtn").bind("click", function(e) 
						{
							me._loadMedia( 'sPoster', 'image' );
						});
                    $("[name='sMediaType']").bind("click", {obj: this}, function(e)
                        {
                            e.data.obj[ this.name ] = $(this).val();
                            $.fbuilder.editItem( e.data.obj.index );
                            $.fbuilder.reloadItems();
                        });    
					$("#sControls,#sLoop,#sAutoplay,#sMuted").bind("click", {obj: this}, function(e)
                        {
                            e.data.obj[ 'data' ][ e.data.obj[ 'sMediaType' ] ][ this.id ] = ( this.checked ) ? 1 : 0;
                            $.fbuilder.reloadItems();
                        });    
					$("#sWidth,#sHeight,#sSrc,#sSrcAlt,#sPoster,#sAlt,#sLink,#sTarget,#sFallback,#sFigcaption,#sPreload").bind("change", {obj: this}, function(e) 
						{
							e.data.obj[ 'data' ][ e.data.obj[ 'sMediaType' ] ][ this.id ] = $(this).val();
                            $.fbuilder.reloadItems();
						});
					
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				},
            showSpecialDataInstance: function()
                {
                    return this._showMediaList() + this._showSettingsBox();
                },
		    _showMediaList: function()
                {
                    var l = [ 'image', 'audio', 'video' ],
                        r  = "", v;
                    
                    for( var i = 0, h = l.length; i < h; i++ )
                    {
                        v = l[ i ];
                        r += '<label style="margin-right:10px;"><input type="radio" name="sMediaType" value="' + v + '" ' + ( ( this.sMediaType == v ) ? 'CHECKED' : '' ) + ' >' + v + '</label>';
                    }
                    return '<div><label>Select media type</label><br/>' + r + '</div>';
                },
            _loadMedia: function( f, type )
                {
                    var src_field = $( '#'+f ),
                        media = wp.media({
                            title: 'Select Source',
                            button: {
                                text: 'Select Source'
                            },
                            multiple: false
                    }).on('select', 
                        (function( field, type ){
                            return function() {
                                var regExp = new RegExp( type, 'i'),
                                    attachment = media.state().get('selection').first().toJSON();
                                if( !regExp.test( attachment.mime ) )
                                {
                                    alert( 'Invalid mime type' );
                                    return;
                                }    
                                field.val( attachment.url ).change();
                            };
                        })( src_field, type )	
                    ).open();
                    return false;
                },    
            _showSettingsBox: function()
                {
                    var d = this.data[ this.sMediaType ];
                    return '<div class="groupBox">' + this[ '_showSettings_'+this.sMediaType ]( d ) + '</div>';
                },
            _showSettings_image: function( d )
                {
                    var r = '';
                    r  = '<label>Width</label><input type="text" class="large" name="sWidth" id="sWidth" value="'+d.sWidth+'">';
                    r += '<label>Height</label><input type="text" class="large" name="sHeight" id="sHeight" value="'+d.sHeight+'">';
                    r += '<label>Source</label><div><input type="text" style="width:70%;" name="sSrc" id="sSrc" value="'+d.sSrc+'"><input id="sMediaBtn" type="button" value="Browse" style="width:28%;" /></div>';
                    r += '<label>Alternate</label><input type="text" class="large" name="sAlt" id="sAlt" value="'+d.sAlt+'">';
                    r += '<label>Figcaption</label><input type="text" class="large" name="sFigcaption" id="sFigcaption" value="'+d.sFigcaption+'">';
                    r += '<label>Link</label><input type="text" class="large" name="sLink" id="sLink" value="'+d.sLink+'">';
                    r += '<label>Target</label><input type="text" class="large" name="sTarget" id="sTarget" value="'+d.sTarget+'" /><span class="uh">_blank, _new, _parent, _self, _top</span>';
                    return r;
                },
            _showSettings_audio_video: function( d, isV )
                {
                    var r = '';
                    r  = '<label>Width</label><input type="text" class="large" name="sWidth" id="sWidth" value="'+d.sWidth+'">';
                    
                    if( isV )
                    r += '<label>Height</label><input type="text" class="large" name="sHeight" id="sHeight" value="'+d.sHeight+'">';
                    
                    r += '<label>Source</label><div><input type="text" style="width:70%;" name="sSrc" id="sSrc" value="'+d.sSrc+'"><input id="sMediaBtn" type="button" value="Browse" style="width:28%;" /></div>';
                    
                    if( isV )
                    r += '<label>Poster</label><div><input type="text" style="width:70%;" name="sPoster" id="sPoster" value="'+d.sPoster+'"><input id="sPosterBtn" type="button" value="Browse" style="width:28%;" /></div>';
                    
                    r += '<label>Alternative Source</label><div><input type="text" style="width:70%;" name="sSrcAlt" id="sSrcAlt" value="'+d.sSrcAlt+'"><input id="sMediaAltBtn" type="button" value="Browse" style="width:28%;" /></div>';
                    r += '<input type="checkbox" name="sControls" id="sControls" value="1" '+( ( d.sControls ) ? 'CHECKED' : '')+'><label>Controls</label><br />';
                    r += '<input type="checkbox" name="sLoop" id="sLoop" value="1" '+( ( d.sLoop ) ? 'CHECKED' : '')+'><label>Loop</label><br />';
                    r += '<input type="checkbox" name="sAutoplay" id="sAutoplay" value="1" '+( ( d.sAutoplay ) ? 'CHECKED' : '')+'><label>Autoplay</label><br />';
                    r += '<input type="checkbox" name="sMuted" id="sMuted" value="1" '+( ( d.sMuted ) ? 'CHECKED' : '')+'><label>Muted</label><br />';
                    var s = '',
                        l = [ 'none', 'auto', 'metadata' ];
                    for( var i = 0; i < 3; i++ )
                    {
                        s += '<option value="' + l[ i ] + '" ' + ( ( l[ i ] == d.sPreload ) ? 'SELECTED' : '' ) + '>' + l[ i ] + '</option>';
                    }
                    r += '<label>Preload</label><select class="large" name="sPreload" id="sPreload">'+s+'</select>';
                    r += '<label>Fallback Text</label><input type="text" class="large" name="sFallback" id="sFallback" value="'+d.sFallback+'">';
                    r += '<label>Figcaption</label><input type="text" class="large" name="sFigcaption" id="sFigcaption" value="'+d.sFigcaption+'">';
                    return r;
                },
            _showSettings_audio: function( d )
                {
                    return this._showSettings_audio_video( d, false );
                },
            _showSettings_video: function( d )
                {
                    return this._showSettings_audio_video( d, true );
                },
            showTitle: function(){ return ''; },
            showShortLabel: function(){ return ''; },
			showUserhelp: function(){ return ''; }    
	});