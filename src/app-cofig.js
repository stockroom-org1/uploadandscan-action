module.exports = appConfig;

function appConfig() {
  return {
    us: 'api-agora-stage-107.stage.veracode.io',
    eu: 'api-agora-stage-107.stage.veracode.io',
    policyUri: '/appsec/v1/policies',
    applicationUri: '/appsec/v1/applications',
    findingsUri: '/appsec/v2/applications',
    teamsUri: '/api/authn/v2/teams',
    pollingInterval: 30000,
    moduleSelectionTimeout: 60000,
  };
}
