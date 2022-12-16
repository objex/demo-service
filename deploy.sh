gcloud config set project rabbito-dev
gcloud functions deploy rest-service --runtime nodejs16 --trigger-http --region us-central1 --allow-unauthenticated --entry-point app
