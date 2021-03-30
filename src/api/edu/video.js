import request from '@/utils/request'

export default {

    //添加章节
    addVideo(video) {
        return request({
            url: '/eduservice/video/addVideo',
            method: 'post',
            data: video
        })
    },
    
    //删除小节
    deleteVideo(id) {
        return request({
            url: '/eduservice/video/'+id,
            method: 'delete'
        })
    },
    //删除视频
    deleteAliyunvod(id){
        return request({
           url: '/eduvod/video/removeAlyVideo/'+id,
           method: 'delete'
        })
    },
    //根据章节id查询
   getVideo(id) {
        return request({
        url: '/eduservice/video/getVideo/'+id,
        method: 'get'
        })
    },
    //修改章节
    updateVideo(video) {
        return request({
            url: '/eduservice/video/updateVideo',
            method: 'post',
            data: video
        })
    },

    
}