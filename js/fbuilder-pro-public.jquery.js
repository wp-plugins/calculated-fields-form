	$.fbuilder[ 'controls' ] = {};
	$.fbuilder[ 'forms' ] = {};
	
	$.fbuilder[ 'htmlEncode' ] = function(value)
	{
		value = $('<div/>').text(value).html()
		value = value.replace(/"/g, "&quot;");
		return value;
	};
	
	$.fn.fbuilder = function(options){
		var opt = $.extend({},
					{
						pub:false,
						identifier:"",
						title:""
					},options, true);
				
		opt.messages = $.extend({
					previous: "Previous",
					next: "Next",
					page: "Page",
					of: "of",
					required: "This field is required.",
					email: "Please enter a valid email address.",
					datemmddyyyy: "Please enter a valid date with this format(mm/dd/yyyy)",
					dateddmmyyyy: "Please enter a valid date with this format(dd/mm/yyyy)",
					number: "Please enter a valid number.",
					digits: "Please enter only digits.",
					maxlength: $.validator.format("Please enter no more than {0} characters"),
                    minlength: $.validator.format("Please enter at least {0} characters."),
                    equalTo: "Please enter the same value again.",
					max: $.validator.format("Please enter a value less than or equal to {0}."),
					min: $.validator.format("Please enter a value greater than or equal to {0}.")
			},opt.messages);
			
		opt.messages.max = $.validator.format(opt.messages.max);
		opt.messages.min = $.validator.format(opt.messages.min);
		
		$.extend($.validator.messages, opt.messages);
		
		var items = [];
		var reloadItemsPublic = function() 
			{
				for (var i=0, h = $.fbuilder.showSettings.formlayoutList.length; i<h; i++)
				{
					$("#fieldlist"+opt.identifier).removeClass($.fbuilder.showSettings.formlayoutList[i].id);
				}	
				$("#fieldlist"+opt.identifier).html("").addClass(theForm.formlayout);
				$("#formheader"+opt.identifier).html(theForm.show());
				
				var page = 0;
				$("#fieldlist"+opt.identifier).append('<div class="pb'+page+' pbreak" page="'+page+'"></div>');
				for (var i=0;i<items.length;i++)
				{
					items[i].index = i;
					if (items[i].ftype=="fPageBreak")
					{
						page++;
						$("#fieldlist"+opt.identifier).append('<div class="pb'+page+' pbreak" page="'+page+'"></div>');
					}
					else
					{
						$("#fieldlist"+opt.identifier+" .pb"+page).append(items[i].show());
						if (items[i].predefinedClick)
						{
							var cl = $("#fieldlist"+opt.identifier+" .pb"+page).find("#"+items[i].name).attr("class")+" predefinedClick";
							$("#fieldlist"+opt.identifier+" .pb"+page).find("#"+items[i].name).attr("class",cl);
							$("#fieldlist"+opt.identifier+" .pb"+page).find("#"+items[i].name).attr("predefined",items[i].predefined);
						}
						if (items[i].userhelpTooltip)
						{
							var uh = $("#fieldlist"+opt.identifier+" .pb"+page).find("#"+items[i].name).parents(".fields");
							uh.find(".uh").css("display","none");
							if (uh.find(".uh").text()!="")
							{
								uh.attr("uh",uh.find(".uh").text());
							}	
						}
					}
				}
				
				if (page>0)
				{
					$("#fieldlist"+opt.identifier+" .pb"+page).addClass("pbEnd");
					$("#fieldlist"+opt.identifier+" .pbreak").find(".field").addClass("ignorepb");
					$("#fieldlist"+opt.identifier+" .pb0").find(".field").removeClass("ignorepb");
					$("#fieldlist"+opt.identifier+" .pbreak").each(function(index) {
					
						var code = $(this).html();
						var bSubmit = '';
						
						if (index == page)
						{
							if ($("#cpcaptchalayer"+opt.identifier).html())
							{
								code += '<div class="captcha">'+$("#cpcaptchalayer"+opt.identifier).html()+'</div>';
								$("#cpcaptchalayer"+opt.identifier).html("");
							}
							if ($("#cp_subbtn"+opt.identifier).html())
							{
								bSubmit = '<div class="pbSubmit">'+$("#cp_subbtn"+opt.identifier).html()+'</div>';
							}	
						}
						$(this).html('<fieldset><legend>'+opt.messages.page+' '+(index+1)+' '+opt.messages.of+' '+(page+1)+'</legend>'+code+'<div class="pbPrevious">'+opt.messages.previous+'</div><div class="pbNext">'+opt.messages.next+'</div>'+bSubmit+'<div class="clearer"></div></fieldset>');
					});
					$( '#fieldlist'+opt.identifier).find(".pbPrevious,.pbNext").bind("click", { 'identifier' : opt.identifier }, function( evt ) {
					    var identifier = evt.data.identifier;
						if (  ($(this).hasClass("pbPrevious")) || (($(this).hasClass("pbNext")) && $(this).parents("form").valid())  )
						{
							var page = parseInt($(this).parents(".pbreak").attr("page"));
							
							(($(this).hasClass("pbPrevious"))?page--:page++);
							$("#fieldlist"+identifier+" .pbreak").css("display","none");
							$("#fieldlist"+identifier+" .pbreak").find(".field").addClass("ignorepb");

							$("#fieldlist"+identifier+" .pb"+page).css("display","block");
							$("#fieldlist"+identifier+" .pb"+page).find(".field").removeClass("ignorepb");
							if ($("#fieldlist"+identifier+" .pb"+page).find(".field").length>0)
							{
								try 
								{
									$("#fieldlist"+identifier+" .pb"+page).find(".field")[0].focus();
								} 
								catch(e){}
							}	
						}
						return false;
					});
				}
				else
				{
					if ($("#cpcaptchalayer"+opt.identifier).html())
					{
						$("#fieldlist"+opt.identifier+" .pb"+page).append('<div class="captcha">'+$("#cpcaptchalayer"+opt.identifier).html()+'</div>');
						$("#cpcaptchalayer"+opt.identifier).html("");
					}
					if ($("#cp_subbtn"+opt.identifier).html())
					{
						$("#fieldlist"+opt.identifier+" .pb"+page).append('<div class="pbSubmit">'+$("#cp_subbtn"+opt.identifier).html()+'</div>');
					}	
				}
				
				$( '#fieldlist'+opt.identifier).find(".pbSubmit").bind("click", { 'identifier' : opt.identifier }, function( evt ) 
					{
						$(this).parents("#fieldlist"+evt.data.identifier).parents("form").submit();
					});
				$("#fieldlist"+opt.identifier+" .predefinedClick").bind("click", function() 
					{
						if ($(this).attr("predefined") == $(this).val())
						{
							$(this).val("");
						}	
					});
				$("#fieldlist"+opt.identifier+" .predefinedClick").blur("click", function() 
					{
						if ($(this).val()=="")
						{
							$(this).val($(this).attr("predefined"));
						}	
					});

				if (i>0)
				{
					for (var i=0;i<items.length;i++)
					{
						items[i].after_show();
					}	
					
					$.fbuilder.showHideDep(
						{
							'formIdentifier' : opt.identifier, 
							'throwEvent'	 : true
						}	
					);
					
					$( '#fieldlist'+opt.identifier).find(".depItemSel,.depItem").bind("change", { 'identifier' : opt.identifier }, function( evt ) 
						{
							$.fbuilder.showHideDep(
								{
									'formIdentifier' : evt.data.identifier, 
									'throwEvent'	 : true
								}	
							);
						});
					try 
					{
						$( "#fbuilder"+opt.identifier ).tooltip({show: false,hide:false,tooltipClass:"uh-tooltip",position: { my: "left top", at: "left bottom", collision: "none"  },items: "[uh]",content: function (){return $(this).attr("uh");} });
					} catch(e){}

				}
			};
			
		var fform=function(){};
		$.extend(fform.prototype,
			{
				title:"Untitled Form",
				description:"This is my form. Please fill it out. It's awesome!",
				formlayout:"top_aligned",
				show:function(){
					return '<div class="fform" id="field"><h1>'+this.title+'</h1><span>'+this.description+'</span></div>';
				}
			});
		
		//var theForm = new fform(),
		var theForm,
			ffunct = {
				getItem: function( name )
					{
						for( var i in items )
						{
							if( items[ i ].name == name )
							{
								return items[ i ];
							}
						}
						return false;
					},
				getItems: function() 
					{
					   return items;
					},
				loadData:function(f)
					{
						var d,
							e = $("#"+f);
						
						this.formId = e.parents( 'form' ).attr( 'id' );
						if ( d = $.parseJSON( e.val() ))
						{
						   if (d.length==2)
						   {
							   items = [];
							   for (var i=0;i<d[0].length;i++)
							   {
								   var obj = eval("new $.fbuilder.controls['"+d[0][i].ftype+"']();");
								   obj = $.extend(true, {}, obj,d[0][i]);
								   obj.name = obj.name+opt.identifier;
								   obj.form_identifier = opt.identifier;
								   items[items.length] = obj;
							   }
							   theForm = new fform();
							   theForm = $.extend(theForm,d[1][0]);
							   reloadItemsPublic();
						   }
						}
					}
			};

		$.fbuilder[ 'forms' ][ opt.identifier ] = ffunct;
	    this.fBuild = ffunct;
	    return this;
	}; // End fbuilder plugin

	$.fbuilder[ 'showSettings' ] = {
		formlayoutList : [{id:"top_aligned",name:"Top Aligned"},{id:"left_aligned",name:"Left Aligned"},{id:"right_aligned",name:"Right Aligned"}]
	};
	
	$.fbuilder.controls[ 'ffields' ] = function(){};
	$.extend($.fbuilder.controls[ 'ffields' ].prototype, 
		{
				form_identifier:"",
				name:"",
				shortlabel:"",
				index:-1,
				ftype:"",
				userhelp:"",
				userhelpTooltip:false,
				csslayout:"",
				init:function(){},
				show:function()
					{
						return 'Not available yet';
					},
				after_show:function(){},
				parseVal:function( v )
					{
						var p = /[+-]?(([0-9]{1,3}(,[0-9]{3})+(\.[0-9]+)?)|(\d+(\.\d+)?)|(\.\d+))/.exec( v );
						return ( p ) ? p[0].replace( /\,/g, '' )*1 : '"' + v.replace(/'/g, "\\'").replace( /\$/g, '') + '"' ;
					},
				val:function(){
					var e = $( "[id='" + this.name + "']:not(.ignore)" );
					if( e.length )
					{
						return this.parseVal( $.trim( e.val() ) );
					}
					return 0;
				}
		});
	
	$.fbuilder[ 'showHideDep' ] = function( configObj )
		{
			if( typeof configObj[ 'formIdentifier' ] !== 'undefined' )
			{
				var identifier = configObj[ 'formIdentifier' ];
				
				if( typeof  $.fbuilder[ 'forms' ][ identifier ] != 'undefined' )
				{
					var toShow = [],
						toHide = [],
						items = $.fbuilder[ 'forms' ][ identifier ].getItems();
						
					for( var i = 0, h = items.length; i < h; i++ )
					{
						if( typeof items[ i ][ 'showHideDep' ] != 'undefined' )
						{
							items[ i ][ 'showHideDep' ]( toShow, toHide );
						}
					}
					
					if ($("#form_structure_hidden"+identifier).length > 0)
					{
						var hideFields = [];
						$.each( toHide, function(i, el)
							{
								el = el.substring(0,el.length-identifier.length);
								if($.inArray(el, hideFields) === -1) 
								{
									hideFields.push(el);
								}	
							});
						$("#form_structure_hidden"+identifier).val(hideFields.join());
					}

					if( typeof configObj[ 'throwEvent' ] == 'undefined' || configObj[ 'throwEvent' ] )
					{
						$( document ).trigger( 'showHideDepEvent', $.fbuilder[ 'forms' ][ identifier ][ 'formId' ] );
					}	
				}
			}	
		}; // End showHideDep	
		