var routes = require('./routes/index');
var users = require('./routes/users');
var bouncedLottery=require('./routes/bouncedLottery');//修改弹框信息查询
var app = express();

var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');


app.use('/', routes);
app.use('/users', users);
app.use('/bouncedLottery', bouncedLottery);