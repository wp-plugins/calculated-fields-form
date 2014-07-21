	$.fbuilder.typeList.push(
		{
			id:"fButton",
			name:"Button",
			control_category:1
		}
	);
	$.fbuilder.controls[ 'fButton' ]=function(){};
	$.extend(
		$.fbuilder.controls[ 'fButton' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			ftype:"fButton",
            sType:"button", // button, reset, calculate
            sValue:"button",
            sOnclick:"",
			userhelp:"A description of the section goes here.",
			display:function()
				{
					return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><input type="button" value="'+this.sValue+'"><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{ 				    
                    $("#sValue,#sOnclick").bind("change", {obj: this}, function(e) 
						{
							e.data.obj[ e.target.id ] = $( this ).val();
							$.fbuilder.reloadItems();
						});
					$("[name='sType']").bind("click", {obj: this}, function(e) 
						{
							e.data.obj.sType = $( this ).val();
                            $.fbuilder.reloadItems();
						});
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				},
            showSpecialDataInstance: function()
                {
                    return this._showTypeSettings() + this._showValueSettings() + this._showOnclickSettings();
                },
            _showTypeSettings: function()
                {
                    var l = [ 'reset', 'button', 'calculate' ],
                        r  = "", v;
                    
                    for( var i = 0, h = l.length; i < h; i++ )
                    {
                        v = l[ i ];
                        r += '<label style="margin-right:10px;"><input type="radio" name="sType" value="' + v + '" ' + ( ( this.sType == v ) ? 'CHECKED' : '' ) + ' >' + v + '</label>';
                    }
                    return '<div><label>Select button type</label><br/>' + r + '</div>';
                },
            _showValueSettings: function()
                {
                    return '<label>Value</label><input type="text" class="large" name="sValue" id="sValue" value="'+this.sValue+'" />';
                },
            _showOnclickSettings: function()
                {
                    return '<label>OnClick event</label><textarea class="large" name="sOnclick" id="sOnclick">'+this.sOnclick+'</textarea>';
                },
            showTitle: function(){ return ''; },
            showShortLabel: function(){ return ''; }
	});