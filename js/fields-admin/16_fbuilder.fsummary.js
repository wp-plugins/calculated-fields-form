	$.fbuilder.typeList.push(
		{
			id:"fsummary",
			name:"Summary",
			control_category:1
		}
	);
	$.fbuilder.controls[ 'fsummary' ] = function(){};
	$.extend(
		$.fbuilder.controls[ 'fsummary' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Summary",
			ftype:"fsummary",
			fields:"",
			titleClassname:"summary-field-title",
			valueClassname:"summary-field-value",
			display:function()
				{
					return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><span class="field">'+this.fields+'</span></div><div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{
					$("#sFields").bind("change", {obj: this}, function(e) 
						{
							e.data.obj.fields = $(this).val();
							$.fbuilder.reloadItems();
						});
					
					$("#sTitleClassname").bind("change", {obj: this}, function(e) 
						{
							e.data.obj.titleClassname = $(this).val();
							$.fbuilder.reloadItems();
						});
					
					$("#sValueClassname").bind("change", {obj: this}, function(e) 
						{
							e.data.obj.valueClassname = $(this).val();
							$.fbuilder.reloadItems();
						});
					
					$("#sPlusBtn").bind("click", {obj: this}, function(e) 
						{
							var field = $( "#sSelectedField" ).val();
							e.data.obj.fields = $.trim( e.data.obj.fields );
							
							e.data.obj.fields += ( /^\s*$/.test( e.data.obj.fields ) ) ? field : ','+field;
							$.fbuilder.editItem( e.data.obj.index  );
							$.fbuilder.reloadItems();
						});
					
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				},
			showAllSettings:function()
				{
					return this.showTitle()+this.showSummaryFields()+this.showCsslayout();
				},	
			showSummaryFields: function() 
				{
					var str = '',
						items = this.fBuild.getItems();
						
					str += '<div><label>Fields to display on summary</label><br /><input name="sFields" id="sFields" class="large" value="'+this.fields+'"></div><div class="clearer"></div>';
					
					str += '<div><label>Select field and press the plus button</label><br /><select name="sSelectedField" id="sSelectedField" style="width:80%;">';
					for ( var i=0; i<items.length; i++ )
					{
						str += '<option value="'+items[i].name+'">'+( ( typeof items[i].title != 'undefined' ) ? items[i].title : '' )+'('+items[i].name+')'+'</option>';
					}
					str += '</select><input type="button" value="+" name="sPlusBtn" id="sPlusBtn" style="padding:3px 10px;" /></div><div class="clearer"></div>';
					
					str += '<div><label>Classname for fields titles</label><br /><input class="large" name="sTitleClassname" id="sTitleClassname" value="'+this.titleClassname+'"></div><div class="clearer"></div>';
					str += '<div><label>Classname for fields values</label><br /><input class="large" name="sValueClassname" id="sValueClassname" value="'+this.valueClassname+'"></div><div class="clearer"></div>';
					
					return str;
				}
	});