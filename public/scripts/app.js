angular
  .module('HackathonApp', [
    'bsLoadingOverlay',
    '720kb.datepicker'
  ])
  .config(function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  })
  .run(function (bsLoadingOverlayService) {
    bsLoadingOverlayService.setGlobalConfig({ templateUrl: 'spinner.html' });
  });
