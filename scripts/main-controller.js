angular
  .module('HackathonApp')
  .controller('MainController', function ($timeout, $http, bsLoadingOverlayService) {
    var vm = this;

    vm.dataRecords = [];
    vm.formDataRecords = {
      "startDate": "2016-01-26",
      "endDate": "2017-02-02"
    };

    /**
     * [getRecords description]
     * @param  {[object]} formdata
     * 
     *   Example:
     *   {
     *     "startDate": "2016-01-26",
     *     "endDate": "2017-02-02"
     *   }
     * 
     */
    function getRecords(formdata) {
      vm.errorMessage = null;
      bsLoadingOverlayService.start({ referenceId: 'loading-records' });

      $http.post('https://getir-bitaksi-hackathon.herokuapp.com/getRecords', formdata)
        .then(function (response) {

          if (response.data.code == -1) {
            vm.errorMessage = response.data.msg;
          } else {
            vm.dataRecords = response.data.records;
          }

          $timeout(function () {
            bsLoadingOverlayService.stop({ referenceId: 'loading-records' });
          });
        });
    }
    vm.getRecords = getRecords;
  });
