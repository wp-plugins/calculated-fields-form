	$.fbuilder.controls[ 'fPhone' ]=function(){};
	$.extend( 
		$.fbuilder.controls[ 'fPhone' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Phone",
			ftype:"fPhone",
			required:false,
			dformat:"### ### ####",
			predefined:"888 888 8888",
			show:function()
			{
				var me   = this,
					str  = "",
					tmp  = this.dformat.split(' '),
					tmpv = this.predefined.split(' '),
                    attr = ( typeof this.predefinedClick != 'undefined' && this.predefinedClick ) ? 'placeholder' : 'value';
					
				for (var i=0;i<tmpv.length;i++)
				{
					if ($.trim(tmpv[i])=="")
					{
						tmpv.splice(i,1);
					}
				}	
                
				for (var i=0;i<tmp.length;i++)
				{
					if ($.trim(tmp[i])!="")
					{
                        str += '<div class="uh_phone" ><input type="text" id="'+this.name+'_'+i+'" name="'+this.name+'_'+i+'" class="field digits '+((this.required)?" required":"")+'" style="width:'+(15*$.trim(tmp[i]).length)+'px" '+attr+'="'+((tmpv[i])?tmpv[i]:"")+'" maxlength="'+$.trim(tmp[i]).length+'" minlength="'+$.trim(tmp[i]).length+'"/><div class="l">'+$.trim(tmp[i])+'</div></div>';
					}
					
					$( document ).on( 'change', '#'+this.name+'_'+i, function(){ 
						var v = '';
						for( var i = 0; i < tmp.length; i++ )
						{
							v += $( '#'+me.name+'_'+i ).val();
						}
						$( '#'+me.name ).val( v ).change();
					} );
				}	
				
				return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input type="hidden" id="'+this.name+'" name="'+this.name+'" class="field " />'+str+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
			}
		}
	);