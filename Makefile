develop:
	docker-compose up

migrations:
	docker exec backend_container_app npx sequelize-cli db:migrate:status
	docker exec backend_container_app npx sequelize-cli db:migrate

remove-migrations:
	docker exec backend_container_app npx sequelize-cli db:migrate:undo
