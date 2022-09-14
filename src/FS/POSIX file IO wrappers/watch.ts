import { watch } from 'fs';
import moment from 'moment';

// persistent ==> continues running as long as at least one file is watched.
watch(
  __filename,
  {
    /**
     * The persistent option is a Boolean that indicates whether the Node.js
     * process should continue to run while files are still being watched.
     * By default, the persistent option is set to true.
     */
    persistent: true,
    /**
     * The recursive option is another Boolean that allows the user to specify
     * whether changes in subdirectories should be watched – by default, this value is
     * set to false.
     */
    recursive: false,
    /**
     * The encoding option is used to specify which character encoding should
     * be used for the filename specified—the default is utf8.
     */
    encoding: 'utf8',
  },
  function (event, filename /* trigger */) {
    // trigger is the file that triggered an event
    if (event === 'rename') {
      console.log('The file was renamed/deleted.');
    } else if (event === 'change') {
      const time = moment().format('MMMM Do YYYY, h:mm:ss a');
      console.log(`${filename} updated ${time}`);
    }
  }
);

const watcher = watch(__filename);

watcher.on('change', (event, filename) => {
  if (event === 'rename') {
    console.log('The file was renamed/deleted.');
  } else if (event === 'change') {
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(`${filename} updated ${time}`);
  }
  watcher.close();
});
