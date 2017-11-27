import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

import { APP_NOTIFICATION_ID } from 'utils';

export const clearLocalNotification = () =>
  AsyncStorage.removeItem(APP_NOTIFICATION_ID).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );

const createNotification = () => ({
  title: 'Study your React Native Cards!',
  body : "👋 Don't forget to take some quizes via the React Native Cards app today!",
  ios  : {
    sound: true
  },
  android: {
    priority: 'high',
    sound   : true,
    sticky  : false,
    vibrate : true
  }
});

export const setLocalNotification = () => {
  AsyncStorage.getItem(APP_NOTIFICATION_ID)
    .then(JSON.parse)
    .then(data => {
      // uncomment for testing purposes...
      //
      // if (data) {
      //   Notifications.cancelAllScheduledNotificationsAsync();
      // }

      // We haven't already set up a local notification
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            // If we've already established a notification then go ahead and cancel that
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();

            // 8:00:00 PM tomorrow (today + 1 day...)
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);
            tomorrow.setSeconds(0);

            // Schedule a new notification for tomorrow...
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time  : tomorrow,
              repeat: 'day'
            });

            AsyncStorage.setItem(APP_NOTIFICATION_ID, JSON.stringify(true));
          }
        });
      }
    });
};
