import axios from 'axios';
import AuthService from './AuthService';
export default class EventService extends AuthService {
    constructor() {
        super();
    }

    addEvent(req) {
        let url = '';
        if (req.id) {
            url = this.domain + '/event/edit/' + req.id;
        } else {
            url = this.domain + '/event/add';
        }
        return axios.post(url, req, super.setTokenToRequest())
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
    }

    getEventsById(id) {
        return axios.get(this.domain + '/event/get/' + id, super.setTokenToRequest())
            .then(res => {
                return (res);
            }).catch(err => {
                console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
            });
    }

    deleteEventById(id) {
        return axios.delete(this.domain + '/event/remove/' + id, super.setTokenToRequest())
            .then(res => {
                return (res);
            }).catch(err => {
                console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);

            })
    }
}
