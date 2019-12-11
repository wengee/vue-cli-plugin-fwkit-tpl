const saveToLocalPlugin = (store) => {
  // store.subscribe((mutation, state) => {
  //   switch (mutation.type) {
  //     case 'toggleSider':
  //       Utils.saveLocal('layoutConfig', state.layoutConfig);
  //       break;

  //     case 'saveToken':
  //       Utils.saveLocal('token', state.token);
  //       break;

  //     default:
  //       break;
  //   }
  // });
};

export default [saveToLocalPlugin];
