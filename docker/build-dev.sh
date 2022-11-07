# build
sudo docker build . --file ./docker/nextjs/Dockerfile --tag 902705914798.dkr.ecr.ap-northeast-2.amazonaws.com/shc-front-stage-nextjs:latest

# deploy
aws ecr get-login-password --profile ECS_ACCESSOR | sudo docker login -u AWS --password-stdin 902705914798.dkr.ecr.ap-northeast-2.amazonaws.com
sudo docker push 902705914798.dkr.ecr.ap-northeast-2.amazonaws.com/shc-front-stage-nextjs:latest

#aws ecs update-service --profile ECS_ACCESSOR --cluster $AWS_ECS_CLUSTER_SHC --service $AWS_ECS_SERVICE_SHC_FRONT --force-new-deployment
aws ecs update-service --profile ECS_ACCESSOR --cluster arn:aws:ecs:ap-northeast-2:902705914798:cluster/shc-stage --service arn:aws:ecs:ap-northeast-2:902705914798:service/shc-stage/front --force-new-deployment