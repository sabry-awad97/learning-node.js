import { watchFile } from 'fs';
import moment from 'moment';

const filePath = __filename;

watchFile(
  filePath,
  {
    /**
     * This value indicates whether the Node.js process should continue to run
     * while files are still being watched. It defaults to true.
     */
    persistent: true,
    /**
     * The interval value controls how often the file should be polled for changes,
     * measured in milliseconds. The default value is 5,007 milliseconds when no interval
     * is supplied.
     */
    interval: 5007,
  },
  function (current, _previous) {
    // will execute every time a change is detected.

    console.log(
      `${filePath} updated ${moment(current.mtime).format('MMMM Do YYYY')}`
    );
  }
);
