const historyKey = 'linkshooter_app_storage';

export default {
  save(snap) {
    return new Promise((resolve, reject) => {
      try {
        const jsonSnap = JSON.stringify(snap);

        localStorage.setItem(historyKey, jsonSnap);

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  },
  getSnap() {
    return new Promise((resolve, reject) => {
      try {
        const mayBeSnap = localStorage.getItem(historyKey);

        const snapObject = mayBeSnap ? JSON.parse(mayBeSnap) : {};

        resolve(snapObject);
      } catch (error) {
        reject(error);
      }
    });
  },
};
