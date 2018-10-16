import { ReplaySubject } from 'rxjs';
import * as path from 'path';

const subject = new ReplaySubject<string>();
const somePath = path.join( '/foo', 'bar' );

subject.next(somePath);
