export class VideoService {

createMeeting(){

return {

meetingId: Date.now().toString(),

status:"created"

}

}

joinMeeting(){

return {

status:"joined"

}

}

}
