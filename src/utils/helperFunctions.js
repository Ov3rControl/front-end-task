export const getSessionsDataByDay = (sessionsData, day) =>
  sessionsData.filter(function(data) {
    return data.day.name === day;
  });

export const getSessionsDataByStage = (sessionsData, stage) =>
  sessionsData.filter(function(data) {
    return data.stage.name === stage;
  });

export const timeToPosition = date => {
  let time = new Date(date);
  let hour = time.getHours();
  let min = time.getMinutes();
  switch (hour) {
    case 9:
      return 100 + min * 6;
    case 10:
      return 460 + min * 6;
    case 11:
      return 660 + min * 6;
    case 12:
      return 840 + min * 6;
    case 13:
      return 1020 + min * 6;
    case 14:
      return 1200 + min * 6;
    case 15:
      return 1380 + min * 6;
    case 16:
      return 1560 + min * 6;
    case 17:
      return 1740 + min * 6;
    case 18:
      return 1920 + min * 6;
    case 19:
      return 2100 + min * 6;
    case 20:
      return 2180 + min * 6;
    case 21:
      return 2360 + min * 6;
    case 22:
      return 2540 + min * 6;
    case 23:
      return 2720 + min * 6;
    case 24:
      return 2900 + min * 6;
    default:
      break;
  }
};
export const generateStageColor = colorIndex => {
  switch (colorIndex) {
    case 0:
      return '#fcdf33';
    case 1:
      return '#de0060';
    case 2:
      return '#003c86';
    case 3:
      return '#ccd8e7';
    default:
      return '#ccd8e7';
  }
};
//export default getSessionsDataByDay;
