docker exec -it jd bash git_pull 手动 git pull 更新脚本

docker exec -it jd bash rm_log#手动删除指定时间以前的旧日志

docker exec jd bash jd xxx # 手动执行某个脚本，如果设置了随机延迟并且当时时间不在0-2、30-31、59分内，将随机延迟一定秒数

docker exec jd bash jd xxx now# 手动执行某个脚本，无论是否设置了随机延迟，均立即运行

docker exec jd bash jd jd_bean_change now
