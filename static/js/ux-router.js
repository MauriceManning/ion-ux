IONUX.Router = Backbone.Router.extend({

  routes: {
    "": "init",
    "data_resource_details/:data_resource_id": "data_resource_details",
    "resource_types/:resource_type_id": "resource_type_details"
  },

  _reset: function(){ //reset the UI
    $(".viewcontainer").empty().hide();
  },

  init: function(){
    this.marine_facilities();
  },

  marine_facilities: function(){
    this._reset();
    this.marineFacilitiesList = new IONUX.Collections.MarineFacilities();
    this.marineFacilitiesListView = new IONUX.Views.MarineFacilitiesView({collection:this.marineFacilitiesList});
    this.marineFacilitiesList.fetch();
    new IONUX.Views.MarineFacilitiesCreateNewView();
  },

  data_resource: function(){
    this._reset();
    this.dataResourceList = new IONUX.Collections.DataResources();
    this.dataResourceListView = new IONUX.Views.DataResourceView({collection:this.dataResourceList});
    this.dataResourceList.fetch();
  },

  data_resource_details: function(data_resource_id){
    this._reset();
    var detailsModel = new IONUX.Models.DataResourceDetails({data_resource_id:data_resource_id});
    this.dataResourceDetailView = new IONUX.Views.DataResourceDetailView({model:detailsModel});
    detailsModel.fetch();
  },
  
  
  resource_type_details: function(resource_type_id) {
      this._reset();
  }

});
