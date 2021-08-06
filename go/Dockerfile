FROM golang:1.16-alpine as builder
WORKDIR /src/go
COPY main.go .
RUN go build main.go

FROM scratch as runner
COPY --from=builder /src/go/main .
CMD ["./main"]
