	$.fbuilder.controls[ 'ffile' ] = function(){};
	$.extend( 
		$.fbuilder.controls[ 'ffile' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Untitled",
			ftype:"ffile",
			required:false,
			size:"medium",
			accept:"",
			upload_size:"",
			multiple:false,
			show:function()
				{
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input type="file" id="'+this.name+'" name="'+this.name+'[]" accept="'+this.accept+'" upload_size="'+this.upload_size+'" class="field '+this.size+((this.required)?" required":"")+'" '+( ( this.multiple ) ? 'multiple' : '' )+' /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			after_show:function()
			{
                $.validator.addMethod("upload_size", function(value, element,params) 
			    {
			      return this.optional(element) || (element.files[0].size/1024 < params);
			    });
			}	  
		}         
	);            
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  