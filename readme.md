# Bot to punch a clock

In order not to have to log into the company's portal every day, I had the idea of creating a script that does this, preventing me from forgetting to punch in the clock.

## Goals

- [x] Create a script to log into the company portal;
- [x] Create a script to hit the spot;
- [x] Check if it's a business day (if I have work on that day);
- [x] Notify status (has been hit or not) on desktop:
  - [x] Test on Ubuntu (20.04);
  - [ ] Test on Windows;
  - [ ] Test on MacOS;
- [x] Create exception handling;
- [x] Try at least 3 times if there is an error;
- [x] Create a script (cron) to boot at the start and end times of the workday.
- [x] Create a delay in bot.

### Extra Goals

- [ ] Add test;
- [ ] Add Eslint and Prettier;
- [ ] Add commit pattern and validation before commit and push;
- [ ] Refactor to TypeScript;
- [x] Leave the hit point script generic;
- [ ] Create installer (.deb, .exe ...);
- [ ] Create interface for configuration (Update image, login, pass ...).

## Environment Variables

Add your application configuration to your .env file in the root of your project:
```env
## Environment
NODE_ENV=DEVELOPMENT

#Credentials
SITE_LOGIN="your login on company portal"
SITE_PASS="your password on company portal"
SITE_URL="url of \"dot\" in company portal"

# Time executions
TIME_BOT_MAX_DELAY_MINUTES="Delay the bot's execution after the cron job."
TIME_BOT_CHECK='{"cronJobKey": "cronString"}'

# Application
NAME_APPLICATION="Notification Title"
TOTAL_ATTEMPTS=3
TIMEOUT_SECOND=20
```

## Run

### Clone repository:

```SHELL
# SSH
$ git clone git@github.com:XavierJece/beat-time.git

# OR HTTPS
$ git clone https://github.com/XavierJece/beat-time.git
```

### Install dependencies:

```SHELL
# YARN 
$ yarn

# OR NPM
$ npm i
```

### Run in Development:

```SHELL
# YARN 
$ yarn dev

# OR NPM
$ npm run dev
```

### Run in Production:

To run in production I chose to use `PM2` which is a daemon process manager that will help you manage and maintain your application online.


#### Installation PM2

```SHELL
$ npm install pm2@latest -g
# or
$ yarn global add pm2
```

##### Setting of environment variables

1. Add the run time schedules to the .env file in the variable TIME_BOT_CHECK. **Note:** despite being a string, write the rules as a JSON list, where the key is the job ID and the value is the schedule string. Example: 
    
    ```json 
    {
        "job1": "0 8 * * MON-FRI",
        "job2": "30 12 * * MON-FRI",
        "job3": "0 18 * * MON-FRI"
    }
    ```

    1. In the example above, we have three job entries (job1, job2, job3) with their respective schedule strings. Each schedule string follows the cron format, specifying the desired time and days of the week for the job to run.

    1. Cron Syntax [more documentation](https://github.com/node-cron/node-cron#cron-syntax)

        1. Allowed fields

            ```
            # ┌────────────── second (optional)
            # │ ┌──────────── minute
            # │ │ ┌────────── hour
            # │ │ │ ┌──────── day of month
            # │ │ │ │ ┌────── month
            # │ │ │ │ │ ┌──── day of week
            # │ │ │ │ │ │
            # │ │ │ │ │ │
            # * * * * * *
            ```

        1. Allowed values

            |     field    |        value        |
            |--------------|---------------------|
            |    second    |         0-59        |
            |    minute    |         0-59        |
            |     hour     |         0-23        |
            | day of month |         1-31        |
            |     month    |     1-12 (or names) |
            |  day of week |     0-7 (or names, 0 or 7 are sunday)  |


1. Add a delay time, in minutes, to the bot's execution after the cron job in the `.env` file. Example: `TIME_BOT_MAX_DELAY_MINUTES=5`.

1. Update the NODE_ENV value to PRODUCTION in the `.env` file . Example: `NODE_ENV=PRODUCTION`.

1. Finally, add the company information to the variables: `SITE_LOGIN`, `SITE_PASS` and `SITE_URL`.

##### Running project by PM2

```SHELL
# The project name is already your choice, I decided as bot-punch_a_clock
$ pm2 start ./src/index.js --name bot-punch_a_clock
```

1. Configuring the restart process when the machine powers up

    ```SHELL
    # You should replace {SO} with the distribution you are using example: ubuntu
    # You must replace {user} with the name of the user who created the example process: joe_doe
    # Complete command example: pm2 startup ubuntu -u joe_doe
    $ pm2 startup {SO} -u {user}
    ```
1. Creating restart point. (When there is any update always do this.)
    ```SHELL
    $ pm2 save 
    ```
1. Commands to help view process status and updates
    ```SHELL
    # See processes in pm2.
    $ pm2 list

    # View logs.
    $ pm2 logs

    # See more detailed logs.
    $ pm2 monit

    # Restart the process. NOTE: If you change the name of the process, you must also change it here.
    $ pm2 restart bot-punch_a_clock
    ```

## Comments

The script to log in and time out was developed according to the login of the company's portal I'm working with. Most likely it will be necessary to update the script if the portal changes.

To update the image that appears in the notification you just need to update the `assets/icon1.jpg`. 


## Dependencies

- [puppeteer](https://www.npmjs.com/package/puppeteer)
- [eferiado](https://www.npmjs.com/package/eferiado)
- [node-notifier](https://www.npmjs.com/package/node-notifier)
- [node-cron](https://www.npmjs.com/package/node-cron)
- [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)

## Author

:bust_in_silhouette: Jecé Xavier

- LinkedIn  [@xavierjece](https://www.linkedin.com/in/xavierjece/)
- GitHub    [@xavierjece](https://github.com/XavierJece)
- Instagram [@xavierjece](https://www.instagram.com/xavierjece/)

## Contributions

- Higor Oliveira [@utoliveira](https://github.com/utoliveira)
- Mario Souto [@omariosouto](https://github.com/omariosouto) ([Basic project](https://github.com/omariosouto/login-com-puppeteer))
- Mikael Vinhas  [@mikaelvinhas](https://www.linkedin.com/in/mikael-vinhas-89b637176/)
- Pedro Magnus [@magnuspedro](https://github.com/magnuspedro)
- Rafael Omodei [@rafaelomodei](https://github.com/rafaelomodei)


## Show your support
Give a :star: if this project helped you!